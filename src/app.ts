import express from 'express';
import cors from 'cors';
import { auth } from './middleware/auth';

let port = 3000;

let app = express();
app.use(cors({
    origin: '*',
    credentials: true
}));

app.use(express.json());

app.use('/', auth

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(auth);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});