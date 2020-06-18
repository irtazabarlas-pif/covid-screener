const express = require('express');
const router = express.Router();

const uuid = require('uuid');
const flows = require('./flowcharts');
const facilities = require('../../Facilities');
const cookieParser = require('cookie-parser');

var   smsHelper = require('../../sms_helper');

// test cookies
// const sessioncookie = require('cookie-session');

/// CRUD Ops

// get all facilities
 router.get('/', (req, res) => {
    console.log(`getting all facilities`);
    
    res.json(facilities); 
});

// get a single facility
router.get('/:id', (req, res) => {
    // console.log(`getting facility: ${req.params.id}`);
    const found = facilities.some(facility => facility.id == req.params.id);

    if(found) {
        res.json(facilities.filter(facility => facility.id == req.params.id))
    }
    else {
        res.status(400).json(`No facility with id ${req.params.id}`);
    }
});

// create facility
router.post('/', (req, res) => {
    console.log('creating...');
    const newfacility = {
        id: uuid.v4(),
        name: req.body.name,
        created_by: req.body.created_by,
        created_on: Date(Date.now()).toLocaleString(),
        effective_from: req.body.effective_from,
        effective_till: req.body.effective_till,
        flow_id: add_flow(req.body.flow)
    };

    if(!newfacility.name) {
        return res.status(400).json({ msg: 'Please include name of the facility'});
    }

    facilities.push(newfacility);
    //res.json(facilities);
    res.redirect('/');
});

// update facility
router.put('/:id', (req, res) => {    
    console.log('updating');
    const found = facilities.some(facility => facility.id === parseInt(req.params.id));

    if(found) {
        const updfacility = req.body;
        facilities.forEach(facility => {
            if(facility.id === parseInt(req.params.id)) {
                facility.name = updfacility.name ? updfacility.name : facility.name;
                facility.effective_from = updfacility.effective_from ? updfacility.effective_from : facility.name;
                facility.effective_till = updfacility.effective_till ? updfacility.effective_till : facility.effective_till;

                res.json({ msg: 'facility updated: ', facility});
            }
        });
    } else {
        res.status(400).json({ msg: `no facility with the id of ${req.params.id}`});
    }
});

// delete facility
router.delete('/:id', (req, res) => {
    console.log('deleting');
    const found = facilities.some(facility => facility.id === parseInt(req.params.id));

    if(found) {
        res.json({ msg: 'facility deleted', facilities: facilities.filter(facility => facility.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({ msg: `no facility with id of ${req.params.id}`});
    }
});

// sms related function

// get a single facility
router.get('/sms/:phone', (req, res) => {
    console.log('=== Got SMS: ' + JSON.stringify(req.cookies));
    let data = smsHelper.SMS_Process(req);    
    res.cookie('sms_cookie', data);
    res.json('SMS Message');
});


module.exports = router 

