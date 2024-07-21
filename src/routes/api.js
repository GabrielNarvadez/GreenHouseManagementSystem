const express = require('express');
const router = express.Router();


const sensorController = require('../controllers/sensorController');
const statusController = require('../controllers/statusController');
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

module.exports = router;
