const facilities = require('./Facilities');
const flowcharts = require('./Flowcharts');

function get_facility_JSON_by_id(id) {
    try {
        let f = facilities.filter(facility => facility.id == id);
        if(Array.isArray(f))
            if(f.length>0)
                return f[0];
    } catch(e) {
        console.log("get_facility_JSON_by_id error: " + e.message);
    }    
    return undefined;
}

function get_facilities_with_sms_phone(ph_no) {
    try {
        let f = facilities.filter(facility => facility.sms_number == ph_no);
        if(Array.isArray(f))
            if(f.length>0)
                return f;
    } catch(e) {
        console.log("get_facility_JSON_by_id error: " + e.message);
    }    
    return [];
}

function get_flowchart_JSON_by_id(id) {
    try {
        let f = flowcharts.filter((flowchart) => flowchart.id == id);
        return f[0];
    } catch(e) {
        console.log("get_flow_JSON_by_id error: " + e.message);
    }    
    return undefined;
}

function get_flow_state_JSON_by_id(id, state) {
    try {
        let f = get_flowchart_JSON_by_id(id);
        if(f !== undefined)
        {
            // see if the state exists
            if(f.flow[state] === undefined)
                return undefined;
            
            return f.flow[state];
        }

    } catch(e) {
        console.log("get_flow_state_JSON_by_id error: " + e.message);
    }
    
    return undefined;
}

function is_facility_active(fac_json) {
    try {
        
        if(fac_json.flow_enabled === false)
        {
            console.log("Screening Protocol for this Facility is disabled Today.");
            return false;
        }
        if(Date.parse(fac_json.effective_from) > Date.now() || Date.parse(fac_json.effective_till) < Date.now())
        {   // Screening protocol is not active today
            console.log("Screening Protocol for this Facility is not Effective Today.");
            return false;
        }
    }
    catch(e) {
        console.log("is_facility_active error: " + e.message);
        return false;
    }

    return true;
}
// let ff = get_facilities_with_sms_phone("+12029320551");
// let fd = get_facilities_with_sms_phone("+120293");

// console.dir('TEST1: ' + JSON.stringify(ff) + ' TEST1: ' + JSON.stringify(fd));
// console.dir('TEST2: ' + JSON.stringify(ff) + ' TEST1: ' + JSON.stringify(fd));
// console.dir('TEST3: ' + JSON.stringify(get_facility_JSON_by_id(1)));
// console.dir('TEST4: ' + JSON.stringify(get_flow_state_JSON_by_id(1, 'start')));
// console.dir('TEST5: ' + JSON.stringify(get_flow_state_JSON_by_id(1)));
// console.dir('TEST6: ' + is_facility_active(get_facility_JSON_by_id(1)));
// console.dir('TEST7: ' + is_facility_active(get_facility_JSON_by_id(2)));

module.exports = { is_facility_active, get_facility_JSON_by_id, get_facilities_with_sms_phone, get_flowchart_JSON_by_id, get_flow_state_JSON_by_id };