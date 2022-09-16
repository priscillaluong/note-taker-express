const express = require('express');
const notes = express.Router();

// GET REQUESTS 

notes.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/db/db.json'))
);

notes.get('/:id', (req, res) => {
    const dbNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(dbNotes[Number(req.params.id)]);
  });

//POST REQUEST

notes.post('/', (req, res) => {
    const dbNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let note = req.body;
    let id = dbNotes.length.toString();
    note.id = id;
    dbNotes.push(note);
    console.log(dbNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(dbNotes));
    res.json(dbNotes);
});