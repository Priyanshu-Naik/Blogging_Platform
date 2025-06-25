import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import db from './database/db.js';
import Router from './routes/route.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

const PORT = 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

db(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`server is running successfully on PORT ${PORT}`));
