const db = require('../models/db');

// Function to handle POST requests for sensor data
exports.postSensorData = (req, res) => {
  const { sensor, output, parameter, value } = req.body;

  const sql = 'INSERT INTO sensor_data (sensor, output, parameter, value) VALUES (?, ?, ?, ?)';
  const values = [sensor, output, parameter, value];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error storing data:', err.message);
      return res.status(500).send('Error storing data: ' + err.message);
    }
    res.status(200).send('Data received');
  });
};

// Function to handle GET requests for all sensor data
exports.getSensorData = (req, res) => {
  const sql = 'SELECT * FROM sensor_data ORDER BY timestamp DESC';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err.message);
      return res.status(500).send('Error fetching data: ' + err.message);
    }
    res.json(results);
  });
};

// Function to handle GET requests for data by specific sensor
exports.getSensorDataBySensor = (req, res) => {
  const sensor = req.params.sensor;
  const sql = 'SELECT * FROM sensor_data WHERE sensor = ? ORDER BY timestamp DESC';
  db.query(sql, [sensor], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err.message);
      return res.status(500).send('Error fetching data: ' + err.message);
    }
    res.json(results);
  });
};
