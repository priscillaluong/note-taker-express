const express = require('express');
const path = require('path');
const fs = require('fs');
// const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

const PORT = process.env.port || 3001;

const app = express();

// Import custom middleware, "cLog"
// app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

//GET REQUESTS
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

/* app.get('/api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/db/db.json'))
); */

/* app.get('/api/notes/:id', (req, res) => {
  const dbNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  res.json(dbNotes[Number(req.params.id)]);
}); */

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//POST REQUEST
app.post('/api/notes', (req, res) => {
    const dbNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let note = req.body;
    let id = dbNotes.length.toString();
    note.id = id;
    dbNotes.push(note);
    console.log(dbNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(dbNotes));
    res.json(dbNotes);
});

// DELETE REQUEST 
app.delete('/api/notes/:id', (req, res) => {
    const dbNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    const newDbNotes = dbNotes.filter(({id}) => id !== req.params.id);
    fs.writeFileSync("./db/db.json", JSON.stringify(newDbNotes));
    res.json(newDbNotes);
});

//PUT REQUEST
app.put('/api/notes/:id', (req, res) => {

});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);