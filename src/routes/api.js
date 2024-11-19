const express = require('express');
const router = express.Router();

const path = require('path');


const sensorController = require('../controllers/sensorController');
const statusController = require('../controllers/statusController');
const powerController = require('../controllers/powerController');

// const configController = require('../controllers/configController');

// Sensor Data Routes
router.post('/sensor-data', sensorController.postSensorData);
router.get('/sensor-data', sensorController.getSensorData);
router.get('/sensor-data/:sensor', sensorController.getSensorDataBySensor);

// Component Status Routes
router.post('/component-status', statusController.postComponentStatus);
router.get('/component-status', statusController.getComponentStatus);
router.get('/component-status/:component', statusController.getComponentStatusByComponent);

// // Configuration Routes
// router.get('/configuration', configController.getConfiguration);
// router.post('/configuration', configController.postConfiguration);

// Routes for battery-related and power-related requests
// Routes to fetch metric data (GET)
router.get('/battery-percentage', powerController.getBatteryPercentage);
router.get('/harvested-power', powerController.getHarvestedPower);
router.get('/system-power-consumption', powerController.getSystemPowerConsumption);
router.get('/water-pump-consumption', powerController.getWaterPumpConsumption);
router.get('/misting-consumption', powerController.getMistingConsumption);
router.get('/shade-net-consumption', powerController.getShadeNetConsumption);

// Route to save new metric data (POST)
router.post('/save-metric', powerController.saveMetricData);

// Route to serve the documentation.pdf file
// Route to serve the documentation.pdf file
router.get('/download/documentation', (req, res) => {
    const filePath = path.join(__dirname, '../assets', 'documentation.pdf');
    res.download(filePath, 'documentation.pdf', (err) => {
      if (err) {
        console.error('Error downloading file:', err);
        res.status(500).send('Error downloading file');
      }
    });
  });
  


module.exports = router;
