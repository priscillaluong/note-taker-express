const express = require('express');
const notes = express.Router();
const path = require('path');
const fs = require('fs');
const uuid = require('../helpers/uuid');

// GET REQUESTS 

notes.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../db/db.json'))
);

notes.get('/:id', (req, res) => {
    const dbNotes = JSON.parse(fs.readFileSync("/Users/priscillaluong/Documents/UOB-BOOTCAMP/note-taker-express/db/db.json", "utf8"));
    res.json(dbNotes[Number(req.params.id)]);
});

//POST REQUEST

notes.post('/', (req, res) => {
    const dbNotes = JSON.parse(fs.readFileSync("/Users/priscillaluong/Documents/UOB-BOOTCAMP/note-taker-express/db/db.json", "utf8"));
    let note = req.body;
    let id = uuid();
    note.id = id;
    dbNotes.push(note);
    console.log(dbNotes);
    fs.writeFileSync("/Users/priscillaluong/Documents/UOB-BOOTCAMP/note-taker-express/db/db.json", JSON.stringify(dbNotes));
    res.json(dbNotes);
});

// DELETE REQUEST 

notes.delete('/:id', (req, res) => {
    const dbNotes = JSON.parse(fs.readFileSync("/Users/priscillaluong/Documents/UOB-BOOTCAMP/note-taker-express/db/db.json", "utf8"));
    const newDbNotes = dbNotes.filter(({ id }) => id !== req.params.id);
    fs.writeFileSync("/Users/priscillaluong/Documents/UOB-BOOTCAMP/note-taker-express/db/db.json", JSON.stringify(newDbNotes));
    res.json(newDbNotes);
});

module.exports = notes;