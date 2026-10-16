import "dotenv/config";
import databaseConnection from './database.js';
import express from 'express'
// const databaseConnection = require('./database.ts');
// const express = require('express');

const app = express();
databaseConnection();

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen('3000', () => console.log("Listening on Port 3000"))