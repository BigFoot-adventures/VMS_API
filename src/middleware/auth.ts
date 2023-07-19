import express from 'express';
import jwt from 'jsonwebtoken';

export const auth = express.Router();

auth.use(express.json());

