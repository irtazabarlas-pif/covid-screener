const express = require('express');
const router = express.Router();
const flows = require('../../Flowcharts');
const uuid = require('uuid');

function get_flow(id) {
    return flows.filter( fl => fl.id === id);    
}

function add_flow(flow_json) {
    const newflow = {
        id: uuid.v4(),
        flow: flow_json        
    };

    flows.push(newflow);
    return newflow.id;
}

/// CRUD Ops

// get all 
 router.get('/', (req, res) => {
    console.log(`getting all flows`)
    res.json(flows); 
});
// get flow for a single flow
router.get('/:id', (req, res) => {
    console.log('all flows: ' + flows);
    console.log('getting flow with id: ' + req.params.id);
    const found = flows.some(flow => flow.id == req.params.id);

    if(found) {
        let found_flow = flows.filter(flow => flow.id == req.params.id);        
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(found_flow, null, 3));
    }
    else {
        res.status(400).json(`No flow with id ${req.params.id}`);
    }
});

// // create flow
// router.post('/', (req, res) => {
//     console.log('creating flow...' + req.body)
//     const newflow = {
//         id: uuid.v4(),
//         flow: req.body.flow,        
//     };

//     flows.push(newflow);
//     //res.json(flows);
//     res.redirect('/');
// });

// // update flow
// router.put('/:id', (req, res) => {    
//     console.log('updating');
//     const found = flows.some(flow => flow.id === parseInt(req.params.id));

//     if(found) {
//         const updflow = req.body;
//         flows.forEach(flow => {
//             if(flow.id === parseInt(req.params.id)) {
//                 flow.name = updflow.name ? updflow.name : flow.name;
//                 flow.effective_from = updflow.effective_from ? updflow.effective_from : flow.name;
//                 flow.effective_till = updflow.effective_till ? updflow.effective_till : flow.effective_till;

//                 res.json({ msg: 'flow updated: ', flow});
//             }
//         });
//     } else {
//         res.status(400).json({ msg: `no flow with the id of ${req.params.id}`});
//     }
// });

// // delete flow
// router.delete('/:id', (req, res) => {
//     console.log('deleting');
//     const found = flows.some(flow => flow.id === parseInt(req.params.id));

//     if(found) {
//         res.json({ msg: 'flow deleted', flows: flows.filter(flow => flow.id !== parseInt(req.params.id))});
//     } else {
//         res.status(400).json({ msg: `no flow with id of ${req.params.id}`});
//     }
// });

module.exports = router; 
// module.exports.add_flow = add_flow; 

