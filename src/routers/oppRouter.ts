import express from 'express';
import { Opportunity } from '../models/opportunity';
import { admin } from '../middleware/auth';

let oppRouter = express.Router();

let opps: Opportunity[] = [];
opps.push(new Opportunity('opp1', 'desc1', 'loc1', new Date('2021-01-01'), 'time1', 'org1', ['vol1', 'vol2']));
opps.push(new Opportunity('opp2', 'desc2', 'loc2', new Date(), 'time2', 'org5', ['vol3', 'vol1']));

// Create an opportunity
// no validation
oppRouter.post('/', (req, res) => {
    if(!admin){
        res.status(401).send({message: 'Not authorized'});
    } else {
        let opp = req.body;
        opps.push(opp);
        res.status(201).json(opp);
    }
});

// Search for opportunities
oppRouter.get('/search', (req, res) => {
    let name = req.query.name;
    //let date = req.query.date;

    console.log('here');
    let copy = opps;
    if(name){
        copy = copy.filter(opp => opp.name == name);
    }
    /*if(date){
        copy = copy.filter(opp => opp.date == date);
    }*/
    res.json(copy);
    
});

// Update an opportunity
// no validation
oppRouter.put('/', (req, res) => {
    let opp = req.body;
    let index = opps.findIndex(opp => opp.name == opp.name);
    if(index == -1){
        res.status(404).send({message: 'Opportunity not found'});
    } else {
        opps[index] = opp;
        res.json(opp);
    }
});

// Delete an opportunity
oppRouter.delete('/:name', (req, res) => {
    let index = opps.findIndex(opp => opp.name == req.params.name);
    if(index == -1){
        res.status(404).send({message: 'Opportunity not found'});
    } else {
        let opp = opps[index];
        opps.splice(index, 1);
        res.json(opp);
    }
});



export { oppRouter };