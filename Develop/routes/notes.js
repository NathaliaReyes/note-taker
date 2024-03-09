const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json')
    .then((data) => 
        res.json(JSON.parse(data))
    );
});

// POST route for a new note
notes.post('/', (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully');
    } else {
        res.error('Error in adding note');
    }
});

// DELETE route for a specific note
notes.delete('/:id', (req, res) => {
    const noteId = req.params.id;
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
        const result = json.filter((note) => note.id !== noteId);
        writeToFile('./db/db.json', result);
        res.json('Note deleted successfully');
    })
    .catch((err) => {
        res.status(500).json({ error: 'Failed to delete note' });
    })
});


module.exports = notes;
