const db = require('../models/db');

// Function to handle POST requests for component data
exports.postComponentStatus = (req, res) => {
  const { component, status } = req.body;

  const sql = 'INSERT INTO system_status (component, status) VALUES (?, ?)';
  const values = [component, status];

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
  const sql = 'SELECT * FROM system_status WHERE component = ? ORDER BY timestamp DESC';
  db.query(sql, [component], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err.message);
      return res.status(500).send('Error fetching data: ' + err.message);
    }
    res.json(results);
  });
};
