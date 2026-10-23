import "dotenv/config";
import databaseConnection from './database.js';
import express from 'express'
import router from "./routes/book.route.js";
import cors from 'cors'
const bookRouter = router;
// const databaseConnection = require('./database.ts');
// const express = require('express');

const app = express();
app.use(express.json());
app.use(cors());
databaseConnection();

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.use('/book', bookRouter);

app.listen(3000, () => console.log("Listening on Port 3000"))