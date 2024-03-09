const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
// Track the routes for notes.js ... TODO
const api = require('./routes/index.js');

const PORT = process.env.port || 5501;

const app = express();

// Import custom middleware, "clog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use('/api', api);

app.use(express.static('public'));



app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});


// GET Route for homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);