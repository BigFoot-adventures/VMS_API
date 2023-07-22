import express from 'express';
import cors from 'cors';
import { userRouter } from './routers/userRouter';
import swaggerUI from 'swagger-ui-express';
import { readFileSync } from 'fs';
import path from 'path';

let port = 3000;
let swagger_doc = readFileSync(path.join(process.cwd(),'src','openapi.json'));
let swagger_obj = JSON.parse(swagger_doc.toString());
let app = express();

app.use(cors({
    origin: '*',
    credentials: true
}));

app.use(express.json());

app.use('/users', userRouter);

app.use('/', swaggerUI.serve, swaggerUI.setup(swagger_obj));

app.listen(port, () => { console.log(`Server is running on port ${port}`); });

/* from here we, set up endpoints for our application
    - an endpoint looks like this: http://localhost:3000/api/endpoint
    - we respond to specific HTTP requests (GET, POST, PUT, DELETE) like this:
        app.get('/api/endpoint', (req, res) => {    
            res.send('Hello World');
        }
*/
/* test*/