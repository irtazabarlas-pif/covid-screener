const express = require('express');
const router = express.Router();

const facilities = require('../../Facilities');

const uuid = require('uuid');
const twilio = require('twilio');
const fac_util = require('../../facility_helpers');
const utils = require('../../helpers');

// /// CRUD Ops

// // get all facilities
//  router.get('/', (req, res) => {
//     console.log(`getting all facilities`)
//     res.json(facilities); 
// });
// // get a single facility
// router.get('/:id', (req, res) => {
//     console.log(`getting facility: ${req.params.id}`)
//     const found = facilities.some(facility => facility.id == req.params.id);

//     if(found) {
//         res.json(facilities.filter(facility => facility.id == req.params.id))
//     }
//     else {
//         res.status(400).json(`No facility with id ${req.params.id}`);
//     }
// });

const MessagingResponse = require('twilio').twiml.MessagingResponse;

router.post('/', (req, res) => {

  const twiml = new MessagingResponse();
  var cookie_empty = true;
  var cookie_value = "";
  const not_active_msg = "The Screening Protocol defined for this facility is not in effect.";
  const not_defined_msg = "The Screening Protocol is not defined.\nThank you for using Covid19 Screener.";
  
  try {
        var sms_from = req.body.To;   // twilio's number
        var f_array = fac_util.get_facilities_with_sms_phone(sms_from);
        var facility_JSON = {};
        var flow_state = "start";
        var flow_id = 0;
        var message_body = req.body.Body;
        var message_value =  message_body.toUpperCase(message_body.trim(req.body.Body));
        var flow_JSON = {};

        if(f_array.length === 0) {
            twiml.message(not_defined_msg);
            res.writeHead(200, {'Content-Type': 'text/xml'});
            res.end(twiml.toString());
        }

        if(f_array.length>1)
        {   // TODO: manage multiple facility message flow
        }

        facility_JSON = f_array[0];
        
        if(fac_util.is_facility_active(facility_JSON) === false)
        {
            twiml.message(not_active_msg);
            res.writeHead(200, {'Content-Type': 'text/xml'});
            res.end(twiml.toString());
        }

        flow_id = facility_JSON.flow_id;
        flow_JSON = fac_util.get_flowchart_JSON_by_id(flow_id);
        
        if(flow_JSON === undefined)
        {
            twiml.message('Twilio Error - no flow associated with ' + sms_from);
            res.writeHead(200, {'Content-Type': 'text/xml'});
            res.end(twiml.toString());
            // console.log('Twilio Error - no flow associated with ' + sms_from)
            // res.end();
        }

        // cookie processing to establish flow state
        cookie_value = utils.getCookieValue(req, 'twilio-cookie');
        cookie_empty = cookie_value === "";

        if(cookie_empty) {
            flow_state = "start";
            // twiml.message.media(facility_JSON.image);
            twiml.message(facility_JSON.name);
        }
        else 
        {
            flow_state = cookie_value;
        }
        // see if there is a reset request
        if(message_value === "R" || message_value === "RESET" || message_value === "SCREEN") {
            flow_state = "start";       
            res.cookie('twilio-cookie', flow_state, { maxAge: 300000 });     
        }

        if(message_value === "END" || message_value === "DONE" || message_value === "BYE") {
            res.clearCookie('twilio-cookie');
            res.writeHead(200, {'Content-Type': 'text/xml'});
            res.end(twiml.toString());            
        }

        let flow_state_JSON = fac_util.get_flow_state_JSON_by_id(flow_id, flow_state);
        if(flow_state_JSON === undefined)
        {
            twiml.message('Twilio Error - no flow state associated with ' + flow_id + "/" + flow_state);
            res.writeHead(200, {'Content-Type': 'text/xml'});
            res.end(twiml.toString());            
        }

        // see if there is a question mark - provide help
        if(message_value === "?") {
            twiml.message(flow_state_JSON.info);
        }
        else {
            let message="";
            nxt_state = "";

            do {            
                //twiml.message("\n[" + flow_state_JSON.short + "]\n");
                if(flow_state_JSON.type === "statement") {  
                    nxt_state = flow_state_JSON.next;
                    message_body = "";
                    twiml.message(flow_state_JSON.sms);
                        
                    if(nxt_state === "" || nxt_state === "end") {
                        res.clearCookie('twilio-cookie');
                        message = message + ' \n' + "Thank you for using Covid19 Screener.";
                        
                        twiml.message(message);
                        res.writeHead(200, {'Content-Type': 'text/xml'});
                        res.end(twiml.toString());            
                    } else {
                        res.cookie('twilio-cookie', flow_state_JSON.next, { maxAge: 300000 });
                        flow_state_JSON = fac_util.get_flow_state_JSON_by_id(flow_id, flow_state_JSON.next);
                        
                        if(flow_state_JSON !== "statement") {
                            message = message + "\n\n" + flow_state_JSON.sms;
                            twiml.message(message);
                            res.writeHead(200, {'Content-Type': 'text/xml'});
                            res.end(twiml.toString());            
                        }
                    }
                }
                else if(flow_state_JSON.type === "bool_decision") {
                        
                        if(message_body === "N" || message_body === "NO") {
                            nxt_state = flow_state_JSON.no;
                        }
                        else if(message_body === "Y" || message_body === "YES") {
                            nxt_state = flow_state_JSON.yes;  
                        }
                        else {
                            nxt_state = "Waiting";
                            twiml.message("\nPlease enter Y or N.\nType R to Restart.\nEnter ? for information.");
                            res.writeHead(200, {'Content-Type': 'text/xml'});
                            res.end(twiml.toString());            
                        }
                        res.cookie('twilio-cookie', nxt_state, { maxAge: 300000 });
                        flow_state_JSON = fac_util.get_flow_state_JSON_by_id(flow_id, nxt_state);
                        
                        //if(flow_state_JSON !== "statement") 
                        {
                            message = message + "\n\n" + flow_state_JSON.sms;
                            twiml.message(message);
                            res.writeHead(200, {'Content-Type': 'text/xml'});
                            res.end(twiml.toString());            
                        }                    
                }
                else {
                    twiml.message('Twilio Error - flow state type unknown ' + flow_id + "/" + flow_state + "/" + flow_state_JSON.type);
                    res.clearCookie('twilio-cookie');
                    res.writeHead(200, {'Content-Type': 'text/xml'});
                    res.end(twiml.toString());            
                } 
            } while(nxt_state !== "");  
        }        
  } catch(e) {
    res.clearCookie('twilio-cookie');
    twiml.message('Error processing: ' + e.message);
  }

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

module.exports = router 

