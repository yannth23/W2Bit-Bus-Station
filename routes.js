let express = require('express')
let BusController = require('./controllers/bus');
let PassengerController = require('./controllers/passenger');
let UserController = require('./controllers/user');

const routes = express.Router();

routes.post('/user/', UserController.create);

routes.post('/bus/', BusController.create);
routes.post('/bus/:licensePlate', BusController.update);
routes.delete('/bus/:licensePlate', BusController.delete);
routes.get('/bus/:licensePlate', BusController.getBusByLicensePlate);
routes.get('/bus/', BusController.getAll);



module.exports = routes;