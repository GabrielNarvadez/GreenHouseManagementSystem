const db = require('../models/db');

// Predefined list of available sensors (added 'ph_sensor' for the pH sensor)
const availableSensors = ['temp', 'humidity', 'tds', 'light_sensor', 'battery_history', 'ph_sensor'];

// Predefined list of valid parameters
const availableParameters = ['celsius', 'lm', 'pH', 'ppm', 'g/m3', '%'];

// Function to handle POST requests for sensor data
exports.postSensorData = (req, res) => {
  const { sensor, output, parameter, value } = req.body;

  // Validate if the sensor is in the list of available sensors
  if (!availableSensors.includes(sensor)) {
    return res.status(400).send(`Invalid sensor. Available sensors are: ${availableSensors.join(', ')}`);
  }

  // Validate if the parameter is in the list of available parameters
  if (!availableParameters.includes(parameter)) {
    return res.status(400).send(`Invalid parameter. Available parameters are: ${availableParameters.join(', ')}`);
  }

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

  // Validate if the sensor is in the list of available sensors
  if (!availableSensors.includes(sensor)) {
    return res.status(400).send(`Invalid sensor. Available sensors are: ${availableSensors.join(', ')}`);
  }

  const sql = 'SELECT * FROM sensor_data WHERE sensor = ? ORDER BY timestamp DESC';
  db.query(sql, [sensor], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err.message);
      return res.status(500).send('Error fetching data: ' + err.message);
    }

    if (results.length === 0) {
      return res.status(404).send('No data found for the specified sensor');
    }

    // Return all the data for the specified sensor
    res.json(results);
  });
};
