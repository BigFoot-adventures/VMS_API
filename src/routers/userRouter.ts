import express from "express";
import { volunteer } from "../models/volunteer";

let userRouter = express.Router();

let users: volunteer[] = [
    {
        first: 'John',
        last: 'Doe',
        userName: 'jdoe',
        password: 'password',
        preferedLocations: ['location1', 'location2'],
        skills_Interests: ['skill1', 'skill2'],
        availability: ['Monday', 'Tuesday'],
        address: '1234 Main St',
        phone: '123-456-7890',
        email: 'test@test.com',
        education: 'High School',
        currentLicenses: ['license1', 'license2'],
        emergencyContact: 'Jane Doe',
        emergencyPhone: '123-456-7890',
        emergencyEmail: 'test@test.com',
        emergencyAddress: '1234 Main St',
        driversLicense: true,
        SSCard: true,
        approved: true
    },
    {
        first: 'Jane',
        last: 'Doe',
        userName: 'jdoe2',
        password: 'password',
        preferedLocations: ['location1', 'location2'],
        skills_Interests: ['skill1', 'skill2'],
        availability: ['Monday', 'Tuesday'],
        address: '1234 Main St',
        phone: '123-456-7890',
        email: 'jane@mail.com',
        education: 'High School',
        currentLicenses: ['license1', 'license2'],
        emergencyContact: 'John Doe',
        emergencyPhone: '123-456-7890',
        emergencyEmail: 'john@mail.com',
        emergencyAddress: '1234 Main St',
        driversLicense: true,
        SSCard: true,
        approved: true
    }
];

// This route will be used to get all users
// add authentication
userRouter.get('/', (req, res) => {
    res.json(users);
});

// This route will be used to create a new user
// add unique userName validation
userRouter.post('/', (req, res) => {
    let user = req.body;
    users.push(user);
    res.json(user);
});

// This route will be used to get a user by their userName
// add authentication
userRouter.get('/:userName', (req, res) => {
    let userName = req.params.userName;
    let user = users.find(user => user.userName == userName);
    res.json(user);
});

// This route will be used to login a user
// add authentication
userRouter.get('/login', (req, res) => {
    let user = req.body;
    let index = users.findIndex(user => user.userName == user.userName && user.password == user.password);
    if(index){
        res.json(user); // will send back a jwt token later
    } else {
        res.status(404).send({message: 'User not found'});
    }
});

// This route will be used to update a user
// add authentication
userRouter.put('/:userName', (req, res) => {
    let userName = req.params.userName;
    let user = req.body;
    let index = users.findIndex(user => user.userName == userName);
    users[index] = user;
    res.json(user);
});

// This route will be used to delete a user
// add authentication
userRouter.delete('/:userName', (req, res) => {
    let userName = req.params.userName;
    let index = users.findIndex(user => user.userName == userName);
    if(index){
        users.splice(index, 1);
        res.sendStatus(200);
    } else {
        res.status(404).send({message: 'User not found'});
    }
});

export { userRouter };