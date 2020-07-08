const flowcharts = [
    {
        "id": 1,
        "flow": {
            "start": {
                "type": "statement",
                "short": "Welcome",
                "theme": "white-card",
                "text": "Thank you for using Covid19 Screener",
                "sms" : "Thank you for using Covid19 Screener",
                "info": "This Screener is a tool to help you determine if you are safe to enter into this facility",
                "next": "b1"
            },
            "b1": {
                "type": "bool_decision",
                "text": "Are you are an employee or contractor?",
                "theme": "white-card",
                "short": "Work here?",
                "sms" : "Are you an Employee or Contractor who work here?",
                "info": "Do you come to work in this facility? The screening protocol may be a bit different for employees vs visitors.",
                "yes" : "b2",
                "no"  : "b12"
            },
            "b2": {
                "type": "bool_decision",
                "short": "Fever?",
                "theme": "white-card",
                "text": "In the past 24 hours, have you had a fever?",
                "sms" : "In the past 24 hours, have you had a fever?",
                "info": "Fever is the most common symptom for Covid19. Approximately 98% patients report fever.",
                "yes" : "b10",
                "no"  : "b3"
            },
            "b3": {
                "type": "bool_decision",
                "short": "Cough or Shortness of Breath?",
                "theme": "white-card",
                "text": "In the past 7 days, have you had a cough or shortness of breath that's new or getting worse?",
                "sms" : "In the past 7 days, have you had a cough or shortness of breath that's new or getting worse? Please enter Yes or No",
                "info": "Dry cough as well as the shortness of breath are the most common symptom for Covid19.",
                "yes" : "b10",
                "no"  : "b4"
            },
            "b4": {
                "type": "bool_decision",
                "short": "Other Symptoms?",
                "theme": "white-card",
                "text": "In the past 3 days, have you had any of these symptoms?<ul><li>Fever or feeling feverish (chills, sweating)</li><li>Sore throat</li><li>Muscle pain or body aches</li><li>Vomiting or diarrhea</li><li>Change in smell or taste</li></ol>",
                "sms" : "In the past 3 days, have you had any of these symptoms? 1) Fever or feeling feverish (chills, sweating)  2) Sore throat 3) Muscle pain or body aches 4) Vomiting or diarrhea  5) Change in smell or taste. Please enter Yes or No",
                "info": "Covid19 may have other less common symptoms.",
                "yes" : "b10",
                "no"  : "b5"
            },
            "b5": {
                "type": "bool_decision",
                "short": "Other Risk Factors?",
                "theme": "white-card",
                "text": "In the past 14 days, have you had close contact with someone who you know was diagnosed with COVID-19?",
                "sms" : "In the past 14 days, have you had close contact with someone who you know was diagnosed with COVID-19? Please enter Yes or No",
                "info": "Covid19 has a very high infection rate.",
                "yes" : "b10",
                "no"  : "b20"
            },
            "b12": {
                "type": "statement",
                "short": "Sorry!",
                "theme": "black",
                "text": "This facility is only open for the employees/contractors who work here. Please check back later.",
                "sms" : "This facility is only open for the employees/contractors who work here. Please check back later.",
                "info": "As per OPM instructions, we are in the Phase 1 of opening the government.",
                "next": ""
            },
            "b10": {
                "type": "statement",
                "short": "More Screening",
                "theme": "orange-card",
                "text": "Please proceed to the Screening Tent.",
                "sms" : "Please proceed to the Screening Tent.",
                "info": "You may be eligible to enter the facilities after getting manually screened.",
                "next": ""
            },
            "b20": {
                "type": "statement",
                "short": "Welcome back!",
                "theme": "green-card",
                "text": "Please proceed and enter the facilities.",
                "sms" : "Please proceed and enter the facilities.",
                "info": "You can enter the facilities but follow Social Distancing.",
                "next": ""
            }
        },
    },
    {
        "id": 2,
        "flow": {
            "start": {
                "type": "statement",
                "short": "Welcome",
                "theme": "white-card",
                "text": "Thank you for using Covid19 Screener",
                "sms" : "Thank you for using Covid19 Screener",
                "info": "This Screener is a tool to help you determine if you are safe to enter into this facility",
                "next": "b1"
            },
            "b1": {
                "type": "bool_decision",
                "text": "Are you are an employee or contractor?",
                "theme": "white-card",
                "short": "Work Here?",
                "sms" : "Please enter Yes or Y if you are an employee",
                "info": "Do you come to work in this facility? The screening protocol may be a bit different for employees vs visitors.",
                "yes" : "b2",
                "no"  : "b12"
            },
            "b2": {
                "type": "bool_decision",
                "short": "Fever?",
                "theme": "white-card",
                "text": "In the past 24 hours, have you had a fever?",
                "sms" : "In the past 24 hours, have you had a fever? Please enter Yes or No",
                "info": "Fever is the most common symptom for Covid19. Approximately 98% patients report fever.",
                "yes" : "c3",
                "no"  : "b3"
            },
            "c3": {
                "type": "bool_decision",
                "short": "Cough or Shortness of Breath?",
                "theme": "white-card",
                "text": "In the past 7 days, have you had a cough or shortness of breath that's new or getting worse?",
                "sms" : "In the past 7 days, have you had a cough or shortness of breath that's new or getting worse? Please enter Yes or No",
                "info": "Dry cough as well as the shortness of breath are the most common symptoms for Covid19.",
                "yes" : "b11",
                "no"  : "b14"
            },
            "b3": {
                "type": "bool_decision",
                "short": "Cough or Shortness of Breath?",
                "theme": "white-card",
                "text": "In the past 7 days, have you had a cough or shortness of breath that's new or getting worse?",
                "sms" : "In the past 7 days, have you had a cough or shortness of breath that's new or getting worse? Please enter Yes or No",
                "info": "Dry cough as well as the shortness of breath are the most common symptoms for Covid19.",
                "yes" : "b10",
                "no"  : "b4"
            },
            "b4": {
                "type": "bool_decision",
                "short": "Other Symptoms?",
                "theme": "white-card",
                "text": "In the past 3 days, have you had any of these symptoms?<br><br><div class='text-left'><ul><li>Fever or feeling feverish (chills, sweating)</li><li>Sore throat</li><li>Muscle pain or body aches</li><li>Vomiting or diarrhea</li><li>Change in smell or taste</li></ol></div>",
                "sms" : "In the past 3 days, have you had any of these symptoms? 1) Fever or feeling feverish (chills, sweating)  2) Sore throat 3) Muscle pain or body aches 4) Vomiting or diarrhea  5) Change in smell or taste. Please enter Yes or No",
                "info": "Covid19 may have other less common symptoms.",
                "yes" : "b10",
                "no"  : "b5"
            },
            "b5": {
                "type": "bool_decision",
                "short": "Other Risk Factors?",
                "theme": "white-card",
                "text": "In the past 14 days, have you had close contact with someone who you know was diagnosed with COVID-19?",
                "sms" : "In the past 14 days, have you had close contact with someone who you know was diagnosed with COVID-19? Please enter Yes or No",
                "info": "Covid19 has a very high infection rate.",
                "yes" : "b10",
                "no"  : "b20"
            },
            "b14": {
                "type": "statement",
                "short": "Screening Needed",
                "theme": "orange-card",
                "text": "Your symptoms need to be reviewed. Please go to Room A3 and get your temperature checked.",
                "sms" : "Your symptoms need to be reviewed. Please go to Room A3 and get your temperature checked.",
                "info": "",
                "next": ""
            },
            "b12": {
                "type": "statement",
                "short": "Sorry!",
                "theme": "black",
                "text": "This facility is only open for the employees/contractors who work here. Please check back later.",
                "sms" : "This facility is only open for the employees/contractors who work here. Please check back later.",
                "info": "As per OPM instructions, we are in the Phase 1 of opening the government.",
                "next": ""
            },
            "b11": {
                "type": "statement",
                "short": "Do not Enter",
                "theme": "red-card",
                "text": "Your symptoms need to be reviewed by a medical professional. Please consult your physician.",
                "sms" : "Your symptoms need to be reviewed by a medical professional. Please consult your physician.",
                "info": "",
                "next": ""
            },
            "b10": {
                "type": "statement",
                "short": "More Screening",
                "theme": "orange-card",
                "text": "Please proceed to the Screening Tent.",
                "sms" : "Please proceed to the Screening Tent.",
                "info": "You may be eligible to enter the facilities after getting manually screened.",
                "next": ""
            },
            "b20": {
                "type": "statement",
                "short": "Welcome back!",
                "theme": "green-card",
                "text": "Please proceed and enter the facility. Show this screen at the door.",
                "sms" : "Please proceed to enter the facility. Show this screen at the door.",
                "info": "You can enter the facilities but follow Social Distancing.",
                "next": ""
            }
        },
    },
    {
        "id": 4,
        "flow": {
            "start": {
                "type": "statement",
                "short": "Welcome",
                "theme": "white-card",
                "text": "Welcome to CDC. Thank you for using Covid19 Screener",
                "sms": "Welcome. Thank you for using Covid19 Screener",
                "info": "This Screener is a tool to help you determine if you are safe to enter into this facility",
                "next": "b1"
             },
            "b1": {
                "type": "bool_decision",
                "short": "Fever",
                "theme": "white-card",
                "text": "In the past 24 hours, have you had a fever?",
                "sms": "In the past 24 hours, have you had a fever? Please enter Yes or No",
                "info": "Fever is the most common symptom for Covid19. Approximately 98% patients report fever.",
                "yes": "s2",
                "no": "s3"
            },
            "s2": {
                "type": "statement",
                "short": "More Screening",
                "theme": "orange-card",
                "text": "Please proceed to the Screening Tent.",
                "sms": "Please proceed to the Screening Tent.",
                "info": "You may be eligible to enter the facilities after getting manually screened.",
                "next": ""
            },
            "s3": {
                "type": "statement",
                "short": "Welcome back!",
                "theme": "green-card",
                "text": "Please proceed and enter the facilities.",
                "sms": "Please proceed and enter the facilities.",
                "info": "You can enter the facilities but follow Social Distancing.",
                "next": ""
            }
        }
    },
    {
        "id": 5,
        "flow": {
            "start": {
                "type": "statement",
                "short": "Welcome",
                "theme": "white-card",
                "text": "Thank you for using Covid19 Screener",
                "sms" : "Thank you for using Covid19 Screener",
                "info": "This Screener is a tool to help you determine if you are safe to enter into this facility",
                "next": "b1"
            },
            "b1": {
                "type": "bool_decision",
                "text": `Have you experienced any of the following symptoms in the past 48 hours: <br><br>
                        <div class='text-left'>
                        &#9830; feeling feverish (subjective or measured)<br>&#9830; cough, shortness of breath or difficulty breathing<br>&#9830; sore throat<br>&#9830; muscle or body aches<br>&#9830; diarrhea<br>&#9830; change in smell or taste?
                        </div>`,
                "theme": "white-card",
                "short": "Symptoms to Watch?",
                "sms" : "Have you experienced any of the following symptoms in the past 48 hours: \n- feeling feverish (subjective or measured), \n- cough, shortness of breath or difficulty breathing, \n- sore throat, \n -muscle or body aches, \n- diarrhea, or \n- change in smell or taste? ",
                "info": "These are the most common symptoms associated with Covid-19.",
                "yes" : "b10",
                "no"  : "b2"
            },
            "b2": {
                "type": "bool_decision",
                "short": "Infection Risk Factor?",
                "theme": "white-card",
                "text": "Within the past 14 days, have you been in close physical contact (6 feet or closer for at least 15 minutes) with a person who is known to have laboratory-confirmed COVID-19 or with anyone who has any symptoms consistent with COVID-19?",
                "sms" : "Within the past 14 days, have you been in close physical contact (6 feet or closer for at least 15 minutes) with a person who is known to have laboratory-confirmed COVID-19 or with anyone who has any symptoms consistent with COVID-19?",
                "info": "Covid-19 is highly contagious, though many remain asymptomatic.",
                "yes" : "b10",
                "no"  : "b3"
            },
            "b3": {
                "type": "bool_decision",
                "short": "Advised?",
                "theme": "white-card",
                "text": "Within the past 14 days, have you received instruction from a public health or medical professional to self-monitor, self-isolate, or self-quarantine because of concerns about COVID-19 infection? <i>This includes you receiving a COVID-19 test recommended by a medical professional, with results still pending.</i>",
                "sms" : "Within the past 14 days, have you received instruction from a public health or medical professional to self-monitor, self-isolate, or self-quarantine because of concerns about COVID-19 infection? This includes you receiving a COVID-19 test recommended by a medical professional, with results still pending. Please enter Yes or No",
                "info": "Covid-19 is best contained through self-quarantine and social distancing. You should take safety measure even when test results are pending.",
                "yes" : "b10",
                "no"  : "b20"
            },            
            "b10": {
                "type": "statement",
                "short": "Do Not Enter",
                "theme": "red-card",
                "text": "<span style='font-size:100px;'>&#9746;</span><br>Access to CDC Facilities Not Approved<br>Click <a style = 'color: yellow;' href='https://www.cdc.gov/coronavirus/2019-ncov/downloads/managing-COVID19-in-correctional-detention.pdf' title='Go to CDC More Instructions Document'>Here</a> for Further Instructions.",
                "sms" : "Access to CDC Facilities Not Approved – Further Instructions: https://www.cdc.gov/coronavirus/2019-ncov/downloads/managing-COVID19-in-correctional-detention.pdf",
                "info": "Your help in containing this epidemic is highly appreciate. Further instructions are available here: https://www.cdc.gov/coronavirus/2019-ncov/downloads/managing-COVID19-in-correctional-detention.pdf",
                "next": "end"
            },
            "b20": {
                "type": "statement",
                "short": "Welcome! &#9745;",
                "theme": "weekday",
                "text": "<span style='font-size:100px;'>&#9745;</span><br>Access to CDC Facilities Approved.  OK to proceed.<br>please show this screen to security at the facility entrance.",
                "sms" : "Access to CDC Facilities Approved.  OK to proceed.\nPlease show this screen to security at the facility entrance.",
                "info": "You can enter the facilities but follow safety protocols and Social Distancing.",
                "next": ""
            }
        },   
    },
    {
        "id": 6,    // this id is used in Facility JSON
        "flow": {   // the 'flow' JSON is used to control what appears
            "start": {  // Name of the State. The FIRST state is ALWAYS 'start'
                "type": "bool_decision",        // bool_decision OR 'statement'
                                                // If type = statement, it has only one button 'next'.
                "short": "", //Travel Risk?",   // OPTIONAL create a header for each question if available
                "theme": "white-card",          // class from theme.css
                "text": "<div class='text-left'>In the last 14 days, have you traveled internationally?<div>",      // text of the question
                "sms" : "In the last 14 days, have you traveled internationally?",      // TODO: OPTIONAL: used if SMS is enabled
                "info": "There are hotspots identified internationally.",// TODO: OPTIONAL: used in SMS right now
                "yes" : "b10",                  // For boolean 'type', Yes Button points to this next state
                "no"  : "b1"                    // For boolean 'type', No Button points to this next state
                                                // If empty, that marks the END of the flow. If "end" is 
                                                // explicitly used, as state, then Reset button is not shown.
                                                
            },
            "b1": {
                "type": "bool_decision",
                "short": "", //Symptoms to Watch?",
                "text": `<div class='text-left'>Are you experiencing any symptoms of COVID-19: <br><br><ul>
                        <li> coughing</li><li> fever or chills</li><li> shortness of breath or difficulty breathing</li><li> fatigue</li><li> headache</li></ul>
                        </div>`,
                "theme": "white-card",                
                "sms" : "Are you experiencing any symptoms of COVID-19 (e.g., coughing, fever or chills, shortness of breath or difficulty breathing, fatigue, headache)?",
                "info": "These are the most common symptoms associated with Covid-19.",
                "yes" : "b10",
                "no"  : "b2"
            },
            "b2": {
                "type": "bool_decision",
                "short": "", //Prior Advice?",
                "theme": "white-card",
                "text": "<div class='text-left'>In the last 14 days, have you received instructions from a public health authority to self-observe, self-isolate, or self-quarantine?</div>",
                "sms" : "Within the past 14 days, have you received instruction from a public health or medical professional to self-monitor, self-isolate, or self-quarantine because of concerns about COVID-19 infection? This includes you receiving a COVID-19 test recommended by a medical professional, with results still pending. Please enter Yes or No",
                "info": "Covid-19 is best contained through self-quarantine and social distancing. You should take safety measure even when test results are pending.",
                "yes" : "b10",
                "no"  : "b3"
            },            
            "b3": {
                "type": "bool_decision",
                "short": "", //Proximity Risk?",
                "theme": "white-card",
                "text": "<div class='text-left'>In the last 14 days, have you been diagnosed with or been in close contact with a person diagnosed with COVID-19?</div>",
                "sms" : "Within the past 14 days, have you received instruction from a public health or medical professional to self-monitor, self-isolate, or self-quarantine because of concerns about COVID-19 infection? This includes you receiving a COVID-19 test recommended by a medical professional, with results still pending. Please enter Yes or No",
                "info": "Covid-19 is best contained through self-quarantine and social distancing. You should take safety measure even when test results are pending.",
                "yes" : "b10",
                "no"  : "b20"
            },                        
            "b10": {
                "type": "statement",
                "short": "", //Screening Needed",
                "theme": "cyan-card",
                "text": `<span style='font-size:2.5em; line-height: 1.2em;'>VACO access denied.</span>
                        <hr>Valid for $DATETIME.
                        <hr>Contact your supervisor for further instructions.`,
                "sms" : "Access to VA Building Not Approved.",
                "info": "Your help in containing this epidemic is highly appreciate.",
                "next": ""
            },
            "b20": {
                "type": "statement",
                "short": "", //<span style='text-align: center;'>Welcome!</span>",
                "theme": "blue-card",
                "text": `<span style='font-size:50px; text-align: center;'>&#9745;</span><br>
                        <span style='font-size: 2em; line-height: 1.2em; text-align: left;'>VACO Access Approved.</span>
                        <hr>Valid for $DATETIME.<hr>Please show this screen to security at the facility entrance.`,
                "sms" : "Access to VACO Approved.\nPlease show this screen to security at the facility entrance.",
                "info": "You can enter the facilities but follow safety protocols and Social Distancing.",
                "next": ""
            }
        },
    },
    {
        "id": 7,    
        "flow": {   
            "start": {
                "type": "bool_decision",
                "short": "", //Symptoms to Watch?",
                "text": `<div class='text-left'>Have you had any of the following NEW or WORSENING conditions in the past 48 hours? <br><br><ul>
                        <li> A fever of 100.4F or higher or felt feverish</li>
                        <li> Cough, shortness of breath or difficulty breathing</li>
                        <li> Sore throat</li>
                        <li> Muscle or body aches</li>
                        <li> Chills</li>
                        <li> Nausea, vomiting or diarrhea</li>
                        <li> Change in smell or taste?</li>
                        </ul>
                        </div>`,
                "theme": "white-card",                
                "sms" : "",
                "info": "",
                "yes" : "b10",
                "no"  : "b2"
            },
            "b2": {
                "type": "bool_decision",
                "short": "", //Proximity Risk?",
                "theme": "white-card",
                "text": "<div class='text-left'>Within the past 14 days, have you been in close contact (6 feet or closer for at least 15 minutes) with a person who tested positive for COVID-19 or with anyone who has any COVID-19 symptoms?<br><small> (fever, cough, shortness of breath or difficulty breathing, sore throat, muscle or body aches, changes in smell or taste, diarrhea)</small></div>",
                "sms" : "",
                "info": "",
                "yes" : "b10",
                "no"  : "b3"
            },            
            "b3": {
                "type": "bool_decision",
                "short": "", //Advisory?",
                "theme": "white-card",
                "text": "<div class='text-left'>Within the past 14 days, have you been told by a public health or medical professional to self-monitor, self-isolate, or self-quarantine because of concerns about COVID-19 infection? This includes you receiving a COVID-19 test recommended by a medical professional, with results still pending.</div>",
                "sms" : "",
                "info": "",
                "yes" : "b10",
                "no"  : "b20"
            },                        
            "b10": {
                "type": "statement",
                "short": "", //Not Approved
                "theme": "cyan-card",
                "text": `<span style='font-size:2em; line-height: 1.2em;'>Access to VA Facilities not approved</span>
                        <hr>Valid for $DATETIME.
                        <hr>Contact your supervisor for further instructions.`,
                "sms" : "",
                "info": "",
                "next": ""
            },
            "b20": {
                "type": "statement",
                "short": "", //<span style='text-align: center;'>Welcome!</span>",
                "theme": "blue-card",
                "text": `<span style='font-size:50px; text-align: center;'>&#9745;</span><br>
                        <span style='font-size: 2em; line-height: 1.2em; text-align: left;'>Access to VA Facilities Approved</span>
                        <hr>Valid for $DATETIME.<hr>
                        Please show this screen to security at the facility entrance, if required.`,
                "sms" : "",
                "info": "",
                "next": ""
            }
        },
    }          
];

module.exports = flowcharts;

// const helpers = require('./helpers');
// var flowcharts = [];
// console.log('flowcharts data', flowcharts);
// if(flowcharts.length == 0) {
//     helpers.loadJSONData('./data/flows.json');
//     console.log('loaded flowcharts data');
// }

// module.exports.flowcharts = flowcharts;