const db = require('../models/db');

// Predefined list of available components
const availableComponents = ['shade_net', 'ph_downer', 'misting_process', 'system_status'];

// Predefined list of valid statuses
const availableStatuses = ['OFF', 'In Progress', 'ON'];

// Function to handle POST requests for component data
exports.postComponentStatus = (req, res) => {
  const { component, status, timestamp } = req.body;

  // Validate if the component is in the list of available components
  if (!availableComponents.includes(component)) {
    return res.status(400).send(`Invalid component. Available components are: ${availableComponents.join(', ')}`);
  }

  // Validate if the status is in the list of available statuses
  if (!availableStatuses.includes(status)) {
    return res.status(400).send(`Invalid status. Available statuses are: ${availableStatuses.join(', ')}`);
  }

    // Validate the timestamp
    const providedTimestamp = new Date(timestamp);
    if (isNaN(providedTimestamp.getTime())) {
      return res.status(400).send('Invalid timestamp. Please provide a valid date.');
    }

  const sql = 'INSERT INTO system_status (component, status, timestamp) VALUES (?, ?, ?)';
  const values = [component, status, providedTimestamp];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error storing data:', err.message);
      return res.status(500).send('Error storing data: ' + err.message);
    }
    res.status(200).send('Data received');
  });
};  

// Function to handle GET requests for all component data
exports.getComponentStatus = (req, res) => {
  const sql = 'SELECT * FROM system_status ORDER BY timestamp DESC';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err.message);
      return res.status(500).send('Error fetching data: ' + err.message);
    }
    res.json(results);
  });
};

// Function to handle GET requests for data by specific component
exports.getComponentStatusByComponent = (req, res) => {
  const component = req.params.component;

  // Validate if the component is in the list of available components
  if (!availableComponents.includes(component)) {
    return res.status(400).send(`Invalid component. Available components are: ${availableComponents.join(', ')}`);
  }

  const sql = 'SELECT * FROM system_status WHERE component = ? ORDER BY timestamp DESC';

  db.query(sql, [component], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err.message);
      return res.status(500).send('Error fetching data: ' + err.message);
    }

    if (results.length === 0) {
      return res.status(404).send('No data found for the specified component');
    }

    res.json(results);
  });
};
