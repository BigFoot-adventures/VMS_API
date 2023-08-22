import express from "express";
import jwt from "jsonwebtoken";
import { user } from "../models/user";
import { admin } from '../middleware/auth';

let userRouter = express.Router();

let users: user[] = [];
users.push(new user('admin', 'John', 'Doe', 'jdoe', 'password',['location1', 'location2'], ['skill1', 'skill2'], ['Monday', 'Tuesday'], '1234 Main St', '123-456-7890', 'test@test.com', 'High School', ['license1', 'license2'], 'Jane Doe', '123-456-7890', 'jane@doe', '1234 Main St', true, true, 'approved'));
users.push(new user('volunteer', 'Jane', 'Doe', 'jdoe2', 'password',['location1', 'location2'], ['skill1', 'skill2'], ['Monday', 'Tuesday'], '1234 Main St', '123-456-7890', 'jane@doe.com', 'College', ['license1', 'license2'], 'John Doe', '123-456-7890', 'test@test.com', '1234 Main St', true, true, 'approved'));
let forbiddenNames = ['login', 'search', 'renew'];

// Search for users
// must be an admin
userRouter.get('/search', (req, res) => {
    const approved = req.query.approved;
    const userName = req.query.userName;
    const first = req.query.first;
    const last = req.query.last;
    if(admin){
        // no error handling for query param types
        let pwdless = users.map(user => user.passwordlessUser());
        if(approved){
            pwdless = pwdless.filter(user => {
                return user.approved == approved;
            });
        }
        if(userName){
            if(userName == typeof 'string') {
                pwdless = pwdless.filter(user => {
                    if (user.userName.includes(userName)) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }
        }
        if(first){
            if(first == typeof 'string') {
                pwdless = pwdless.filter(user => {
                    if (user.first.toLowerCase().includes(first.toLowerCase())) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }
        }
        if(last){
            if(last == typeof 'string') {
                pwdless = pwdless.filter(user => {
                    if (user.last.toLowerCase().includes(last.toLowerCase())) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }
        }
        res.json(pwdless);
    } else {
        res.status(401).send({message: 'Unauthorized'});
    }
});

// Create a new user
userRouter.post('/', (req, res) => {
    let u = req.body;
    let newUser = new user(u.role, u.first, u.last, u.userName, u.password, u.preferedLocations, u.skills_Interests, u.availability, u.address, u.phone, u.email, u.education, u.currentLicenses, u.emergencyContact, u.emergencyPhone, u.emergencyEmail, u.emergencyAddress, u.driversLicense, u.SSCard, u.approved);    

    if(forbiddenNames.includes(newUser.userName) || users.find(user => user.userName == newUser.userName)) {
        res.status(400).send({message: 'User name not available'});
    } else {
        if(newUser.isValid()) {
            users.push(newUser);    
            res.json(newUser.passwordlessUser());
        } else {
            res.status(400).send({message: 'Invalid user'});
        }
    }
});

// Get a user by userName
// must be an admin or the user
userRouter.get('/:userName', (req, res) => {
    let user = users.find(user => user.userName == req.params.userName);
    if(user){
        res.json(user.passwordlessUser());
    } else {
        res.status(404).send({message: 'User not found'});
    }
});

// Login a user, returns a token
userRouter.post('/login', (req, res) => {
    let user = users.find(user => user.userName == req.body.userName && user.password == req.body.password);
    if(user){
        let data = {
            userName: user.userName,
            role: user.role,
            first: user.first,
            last: user.last
        };
        let token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60), // 1 hour expiration
            data: data
        }, 'secret', { algorithm: 'HS256' });
        res.status(209).send({token: token}); 
    } else {
        res.status(404).send({message: 'User not found'});
    }
});

// Update a user
// must be an admin or the user
// must be an admin to change role
userRouter.put('/:userName', (req, res) => {
    let index = users.findIndex(user => user.userName == req.params.userName);
    if(index){
        let u = req.body;
        let newUser = new user(u.role, u.first, u.last, u.userName, u.password, u.preferedLocations, u.skills_Interests, u.availability, u.address, u.phone, u.email, u.education, u.currentLicenses, u.emergencyContact, u.emergencyPhone, u.emergencyEmail, u.emergencyAddress, u.driversLicense, u.SSCard, u.approved);    
        // check if admin // I did not create a response for a volunteer trying to change the role, because they should not have an input field for role
        if(!admin)
            newUser.role = users[index].role;
        if(newUser.isValid()) {
            let message = '';
            if(forbiddenNames.includes(newUser.userName) || users.find(user => user.userName == newUser.userName)) {
                newUser.userName = users[index].userName;
                message = 'Username not available';
            } else {
                message = 'User updated';
            }
            users[index] = newUser;
            res.status(200).send({message: message, user: newUser.passwordlessUser()});
            
        } else {
            res.status(400).send({message: 'Invalid user'});
        }
    }
});

// Delete a user
// must be an admin or the user
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