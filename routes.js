// import express from 'express'
// import BusController from './controllers/bus';
// import PassengerController from './controllers/passenger';
// import UserController from './controllers/user';

let express = require('express')
let BusController = require('./controllers/bus');
let PassengerController = require('./controllers/passenger');
let UserController = require('./controllers/user');

const routes = express.Router();

// const busController = new BusController();
// const passengerController = new PassengerController();
// const userController = new UserController();

routes.get('/bus/', BusController.getAll);
routes.get('/bus/:licensePlate', BusController.getBusByLicensePlate);
routes.delete('/bus/:licensePlate', BusController.deleteBusByLicensePlate);
routes.post('/bus/', BusController.create);
routes.post('/bus/:licensePlate', BusController.updateBusByLicensePlate);

// routes.get('/classes', classesController.index);

// routes.post('/connections', connectionsController.create);
// routes.get('/connections', connectionsController.index);

module.exports = routes;