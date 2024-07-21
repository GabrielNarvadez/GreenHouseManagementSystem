const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const fs = require('fs');

const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));
app.use('/assets', express.static(path.join(__dirname, '../assets')));

// Use API routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../public', 'index.html');

  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Error reading file');
      return;
    }
    res.send(html);
  });
});

module.exports = app;
