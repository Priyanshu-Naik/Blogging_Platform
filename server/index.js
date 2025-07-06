import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import db from './database/db.js';
import Router from './routes/route.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: 'https://blogging-platform-szt7.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.options('*', cors({
  origin: 'https://blogging-platform-szt7.vercel.app',
  credentials: true
}));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

app.get('/',(req, res) => {
    res.send({
        activeStatus: true,
        error: false,
    })
})

const PORT = 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

db(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`server is running successfully on PORT ${PORT}`));
