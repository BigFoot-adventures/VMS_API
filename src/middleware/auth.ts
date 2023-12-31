import express from 'express';
import jwt from 'jsonwebtoken';
let admin = false;

let authRouter = express.Router();

// 
authRouter.use('/users/:userName', (req, res, next) => {
    let routes = [
        {
            method: 'GET'
        },
        {
            method: 'DELETE'
        },
        {
            method: 'PUT'
        }
    ];
    let cont = true;
    for(let route of routes){
        if(req.params.userName == 'login'){
            break;
        }
        if(req.method == route.method){
            if(req.headers.authorization){
                try {
                    let verified = jwt.verify(req.headers.authorization.replace('Bearer ', ''), 'secret', {algorithms: ['HS256']}) as any;
                    if(verified.data.role == 'admin'){
                        admin = true;
                        break;
                    } else if(verified.data.userName == req.params.userName){
                        admin = false;
                        break;
                    } else {
                        admin = false;
                        cont = false;
                        break;
                    }
                } catch {
                    cont = false;
                    break;
                }
            } else {
                cont = false;
                break;
            }
        }
    }
    if(cont){
        next();
    } else {
        res.status(401).send({message: 'Unauthorized'});
    }
});

authRouter.use('/opps', (req, res, next) => {
    let cont = true;
    if(req.headers.authorization){
        try {
            let verified = jwt.verify(req.headers.authorization.replace('Bearer ', ''), 'secret', {algorithms: ['HS256']}) as any;
            if(verified.data.role == 'admin'){
                admin = true;
            }  else {
                admin = false;
                cont = false;
            }
        } catch {
            cont = false;
        }
    } else {
        cont = false;
    }
    if(cont){
        next();
    } else {
        res.status(401).send({message: 'Unauthorized'});
    }
});
    

export { authRouter, admin };