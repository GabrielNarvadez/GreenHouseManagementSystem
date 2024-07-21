const express = require('express');
const app = require('./app');
const port = process.env.PORT || 3000;
const fs = require('fs');
const path = require('path');

// Serve static files from the "assets" directory
app.use(express.static(path.join(__dirname, '../public')));
app.use('/assets', express.static(path.join(__dirname, '../assets')));

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../public','index.html');

  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Error reading file');
      return;
    }
    res.send(html);
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
