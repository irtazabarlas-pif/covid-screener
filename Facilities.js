const facilities = [
    {
        id: 1,
        name: 'A GSA Facility',
        image: 'https://www.gsa.gov/sites/gsa.gov/templates/resources/images/nav-logo.png',
        header_color: '#204F81',
        header_text_color: '#ffffff',
        created_by: 'System',
        created_on: '06/12/2020',
        effective_from: '06/12/2020',
        effective_till: '06/12/2021',
        flow_enabled: true,
        address: 'Any',
        gps_coord: "",
        sms_number: "",
        flow_id: 1
    },
    {
        id: 2, 
        name: 'VA Facility (Not Active Screening)',
        image: 'https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/img/header-logo.png',
        header_color: '#112e51',
        header_text_color: '#ffffff',
        created_by: 'Mrs Smith',
        created_on: '05/20/2020',
        effective_from: '05/25/2020',
        effective_till: '05/25/2020',
        flow_enabled: true,
        address: 'Any',
        gps_coord: "",
        sms_number: "",
        flow_id: 4
    },
    {
        id: 3, 
        name: 'VA Facility (Complex Flow)',
        image: 'https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/img/header-logo.png',
        header_color: '#112e51',
        header_text_color: '#ffffff',
        created_by: 'Mrs Smith',
        created_on: '05/20/2020',
        effective_from: '05/25/2020',
        effective_till: '05/25/2021',
        flow_enabled: true,
        address: 'Any',
        gps_coord: "",
        sms_number: "",
        flow_id: 2
    },
    {
        id: 4, 
        name: 'SSA Covid-19 Screening Tool',
        image: 'https://www.ssa.gov/framework/images/logo.svg',
        header_color: '#112e51',
        header_text_color: '#ffffff',
        created_by: 'Mrs Smith',
        created_on: '05/20/2020',
        effective_from: '05/25/2020',
        effective_till: '05/25/2021',
        flow_enabled: true,
        address: 'Any',
        gps_coord: "",
        sms_number: "",
        flow_id: 2
    },
    {
        id: 5, 
        name: 'CDC Facility Entrance Protocol',
        image: '/assets/img/cdc.png',
        header_color: '#ffffff',
        header_text_color: '#000000',
        created_by: 'Cheryl Prigodich',
        created_on: '06/17/2020',
        effective_from: '06/17/2020',
        effective_till: '06/17/2031',
        flow_enabled: true,
        address: 'Any',
        gps_coord: "",
        weekday_background_color_array: ['#ffffff','#ead9d9','#e1ead9','#ead9e7','#deead9','#d9e0ea','#ead9d9'],
        weekday_text_color_array: ['#080808','#080808','#080808','#080808','#080808','#080808','#080808 '],
        weekday_card_bg_color_array:    ['#00ff00','#0000ff','#ffeb3b','#9c27b0','#00bcd4','#8bc34a','#795548'],
        weekday_card_text_color_array:  ['#ffffff','#ffffff','#080808','#ffffff','#000000','#000000','#ffffff '],
        sms_number: "",
        flow_id: 5
    },
    {
        id: 6, // each facility has its unique ID
        name: 'VA Facility Entrance Protocol For VACO',
        image: 'https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/img/header-logo.png',
        header_color: '#112e51',
        header_text_color: '#ffffff',   //TODO
        created_by: 'Joseph Nassar',    // For record
        created_on: '06/23/2020',       // For record
        effective_from: '06/20/2020',   // Work after this date
        effective_till: '06/19/2021',   // Work before this date
        flow_enabled: true,             // overall control
        address: 'Any',                 // TODO
        gps_coord: "",                  // TODO
        sms_number: "",                 // TODO
        flow_id: 6                      // ID of the FlowChart 
                                        //      to use for this facility
    },
    {
        id: 7, // each facility has its unique ID
        name: 'VA Facility Entrance Protocol',
        image: 'https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/img/header-logo.png',
        header_color: '#112e51',
        header_text_color: '#ffffff',   //TODO
        created_by: 'Bradly Armstrong',    // For record
        created_on: '06/25/2020',       // For record
        effective_from: '07/1/2020',   // Work after this date
        effective_till: '06/30/2021',   // Work before this date
        flow_enabled: true,             // overall control
        address: 'Any',                 // TODO
        gps_coord: "",                  // TODO
        sms_number: "",                 // TODO
        flow_id: 7                      // ID of the FlowChart 
                                        //      to use for this facility
    },    
];

function is_valid_facility_id(id) {
    return(facilities.some(facility => facility.id == id));
}

module.exports = facilities;