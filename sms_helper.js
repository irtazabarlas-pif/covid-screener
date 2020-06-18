const express = require('express');
const flows = require('./routes/api/flowcharts');
const facilities = require('./Facilities');
const flowcharts = require('./Flowcharts');

var data = {
    'ids': {
        'facility_id': 0,
        'flow_id': 0
    },
    'state': {
        'attempts': 0,
        'response_expected': [],    // * : for anything - for statements    boolean: Yes/No    reset
        'next_flow_state': "",          // flow next state expected
        'next_flow_yes': "",            // flow yes state expected
        'next_flow_no': ""
    },
    'msg': ""
};

// sets up a cookie data structure
function setupFirstSMSCookie(req) {
    
    // get facilities with the same phone number
    const sms_number_found = facilities.some(facility => facility.sms_number == req.params.phone);
    let msg = "";
    console.dir('data right now: ' + JSON.stringify(data));
    if(sms_number_found) {
        let matched_facilities = facilities.filter(facility => facility.sms_number == req.params.phone);
        // console.log('facilities with ph: ' + JSON.stringify(matched_facilities));
        // create an SMS message
        if(matched_facilities.length === 1) {
            data['ids'].facility_id = matched_facilities[0].id;
            // console.log('data so far: ' + JSON.stringify(data));
            data['ids'].flow_id = matched_facilities[0].flow_id;
            
            let found = flowcharts.some(flow => flow.id == matched_facilities[0].flow_id);
            if(found) {
                let found_flow = flowcharts.filter(flow => flow.id == matched_facilities[0].flow_id);
                console.log(found_flow);
                data['msg'] = found_flow[0].flow["start"].sms;
                data['state'].next_flow_state = found_flow[0].flow["start"].next;
                data['state'].response_expected = [0];
            }
        }
        else {
            msg = "Following facilities are associated with this phone number.%0a";
            let count = 0;
            let sel_string = "%0aType ";
            
            for(i = 0; i< matched_facilities.length; i++)
            {
                count++;
                msg = msg + " " + count + ") " + matched_facilities[i].name;
                sel_string = sel_string + String(count);
                data['state'].response_expected.push(count);

                if(i< matched_facilities.length - 1)
                    sel_string = sel_string + ", ";
            }
            msg = msg + sel_string + " to continue";
            // console.log('full message: ' + msg);            
        }
    }
    else {
        msg = 'No facility with SMS Number registered yet. ' + req.params.phone;
        data['msg'] = msg;        
    }

    return data;
}

function setupFlowID(req) {

}

function createNextSMSCookie(req) {
    console.dir(req.body);
    return({});
}

function SMSCookieProcessor(req) {
    
    let msg = "";
    const page_url = req.baseURL;

    //if(typeof _.get(req.cookie, "facilities-cookie") === 'undefined') {
    let cookie_exist = JSON.stringify(req.cookies).toString()!=="{}";
    if(cookie_exist) {
        // there is a possibility of an empty cookie
        if(JSON.stringify(req.cookies).toString()==="{}")
        {
            console.log('stale cookie');
            cookie_exist = false;
        }
    }
    // console.log(JSON.stringify(req.cookies));
    if(cookie_exist === false) {
        console.log('processing sms. creating first\n');
        data = setupFirstSMSCookie(req);
    }
    else 
    {
        try {
                let cookie_data = req.cookies.sms;
                if(cookie_data.ids.facility_id == 0) {
                    // setup flow id
                    console.log('processing sms. setting up flow id');
                    data = setupFlowID(req);
                }
                else {
                    console.log('processing sms. creating next');
                    // res.clearCookie('facilities-cookie');
                    // let v = Number(req.cookies["facilities-cookie"]);
                    //res.cookie('facilities-cookie', String(v+1));
                    data = createNextSMSCookie(req);
                }
        } 
        catch(e) {
            console.log('Error 102: ' + e.message);            
        }
    }

    return data;
}

exports.SMS_Process = function(req) {
    console.dir('processing sms' + JSON.stringify(req.cookies));
    let ret_json = SMSCookieProcessor(req);
    // ret_json = "cookie:0";
    console.log('Return Msg: ' + JSON.stringify(ret_json));
    return ret_json;
}