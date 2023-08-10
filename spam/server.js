const log = console.log;
const express = require('express');
const {  getDb, connectToDb } = require('./db');
const PORT = 3000;
const app = express();

// const { connection } = require('mongoose');

let db;

connectToDb((err) => {

    if (!err) {
        app.listen(PORT, (err) => {
            err ? console.log(err) : console.log(`Listening port ${PORT}`);
            console.log('CONNECTED YES');
           
        });
        db = getDb();
    }
    else {
        console.log(`DB conection error:$(err)`);
    }
})

