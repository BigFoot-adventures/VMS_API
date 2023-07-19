import express from 'express';
import cors from 'cors';
let port = 3000;

let app = express();
app.use(cors({
    origin: '*',
    credentials: true
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

/* from here we, set up endpoints for our application
    - an endpoint looks like this: http://localhost:3000/api/endpoint
    - we respond to specific HTTP requests (GET, POST, PUT, DELETE) like this:
        app.get('/api/endpoint', (req, res) => {    
            res.send('Hello World');
        }
*/