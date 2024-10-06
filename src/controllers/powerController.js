const db = require('../models/db');

// Predefined list of allowed metric types
const allowedMetricTypes = [
  'battery_percentage', 
  'harvested_power', 
  'system_power_consumption', 
  'water_pump_consumption', 
  'misting_consumption', 
  'shade_net_consumption'
];

// Function to get all battery percentage data (GET)
exports.getBatteryPercentage = (req, res) => {
  const sql = 'SELECT metric_type, metric_value, timestamp FROM system_metrics WHERE metric_type = "battery_percentage" ORDER BY timestamp DESC';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching battery percentage data:', err.message);
      return res.status(500).send('Error fetching battery percentage: ' + err.message);
    }

    if (results.length === 0) {
      return res.status(404).send('No data found for battery percentage');
    }

    res.json(results);  // Return all battery percentage data
  });
};

// Function to get all harvested power data (GET)
exports.getHarvestedPower = (req, res) => {
  const sql = 'SELECT metric_type, metric_value, timestamp FROM system_metrics WHERE metric_type = "harvested_power" ORDER BY timestamp DESC';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching harvested power data:', err.message);
      return res.status(500).send('Error fetching harvested power: ' + err.message);
    }

    if (results.length === 0) {
      return res.status(404).send('No data found for harvested power');
    }

    res.json(results);  // Return all harvested power data
  });
};

// Function to get all system power consumption data (GET)
exports.getSystemPowerConsumption = (req, res) => {
  const sql = 'SELECT metric_type, metric_value, timestamp FROM system_metrics WHERE metric_type = "system_power_consumption" ORDER BY timestamp DESC';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching system power consumption data:', err.message);
      return res.status(500).send('Error fetching system power consumption: ' + err.message);
    }

    if (results.length === 0) {
      return res.status(404).send('No data found for system power consumption');
    }

    res.json(results);  // Return all system power consumption data
  });
};

// Function to get all water pump power consumption data (GET)
exports.getWaterPumpConsumption = (req, res) => {
  const sql = 'SELECT metric_type, metric_value, timestamp FROM system_metrics WHERE metric_type = "water_pump_consumption" ORDER BY timestamp DESC';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching water pump consumption data:', err.message);
      return res.status(500).send('Error fetching water pump consumption: ' + err.message);
    }

    if (results.length === 0) {
      return res.status(404).send('No data found for water pump consumption');
    }

    res.json(results);  // Return all water pump consumption data
  });
};

// Function to get all misting system power consumption data (GET)
exports.getMistingConsumption = (req, res) => {
  const sql = 'SELECT metric_type, metric_value, timestamp FROM system_metrics WHERE metric_type = "misting_consumption" ORDER BY timestamp DESC';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching misting system consumption data:', err.message);
      return res.status(500).send('Error fetching misting system consumption: ' + err.message);
    }

    if (results.length === 0) {
      return res.status(404).send('No data found for misting system consumption');
    }

    res.json(results);  // Return all misting system consumption data
  });
};

// Function to get all shade net motor power consumption data (GET)
exports.getShadeNetConsumption = (req, res) => {
  const sql = 'SELECT metric_type, metric_value, timestamp FROM system_metrics WHERE metric_type = "shade_net_consumption" ORDER BY timestamp DESC';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching shade net motor consumption data:', err.message);
      return res.status(500).send('Error fetching shade net motor consumption: ' + err.message);
    }

    if (results.length === 0) {
      return res.status(404).send('No data found for shade net motor consumption');
    }

    res.json(results);  // Return all shade net motor consumption data
  });
};

// Function to insert new metric data into system_metrics table (POST)
exports.saveMetricData = (req, res) => {
  const { metric_type, metric_value } = req.body;

  // Validate the metric_type against predefined allowed values
  if (!allowedMetricTypes.includes(metric_type)) {
    return res.status(400).send(`Invalid metric_type. Allowed values are: ${allowedMetricTypes.join(', ')}`);
  }

  const sql = 'INSERT INTO system_metrics (metric_type, metric_value) VALUES (?, ?)';
  const values = [metric_type, metric_value];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error saving metric data:', err.message);
      return res.status(500).send('Error saving metric data: ' + err.message);
    }
    res.status(200).send('Metric data saved successfully');
  });
};
