const express = require('express');
const app = require('../app');
const port = process.env.PORT || 3000;
const fs = require('fs');
const path = require('path');
const db = require('../models/db'); // Use your existing db connection
const fastcsv = require('fast-csv');

// Serve static files from the "assets" directory
app.use(express.static(path.join(__dirname, '../public')));
app.use('/assets', express.static(path.join(__dirname, '../assets')));

// Route to serve the index.html file
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

// Function to export data to CSV
const exportToCSV = (query, filePath, res) => {
  db.query(query, (err, rows) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Error fetching data');
    }

    const ws = fs.createWriteStream(filePath);
    fastcsv
      .write(rows, { headers: true })
      .pipe(ws)
      .on('finish', () => {
        res.download(filePath, (err) => {
          if (err) {
            console.error('Error downloading CSV:', err);
          }
          fs.unlinkSync(filePath); // Delete the file after download
        });
      });
  });
};

// Route to export sensor data to CSV
app.get('/export/sensors', (req, res) => {
  const query = `
    SELECT sensor, value, timestamp
    FROM sensor_data
    WHERE sensor IN ('Temp', 'Humidity', 'Luminous Flux', 'TDS Sensor', 'pH Level')
    ORDER BY timestamp DESC;
  `;
  const filePath = path.join(__dirname, '../sensors_data.csv');
  exportToCSV(query, filePath, res);
});

// Route to export consumption data to CSV
app.get('/export/consumption', (req, res) => {
  const query = `
    SELECT * FROM system_metrics
    ORDER BY timestamp DESC;
  `;

  const filePath = path.join(__dirname, '../consumption_data.csv');
  exportToCSV(query, filePath, res);
});

// Start the server
app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on port 3000');
});

