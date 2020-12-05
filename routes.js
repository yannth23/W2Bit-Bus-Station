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

routes.get('/bus/create', BusController.createBus);
routes.get('/bus/', BusController.getAll);
routes.get('/bus/getBusByLicensePlate', BusController.getBusByLicensePlate);
routes.delete('/bus/deleteBusByLicensePlate', BusController.deleteBusByLicensePlate);
// routes.get('/classes', classesController.index);

// routes.post('/connections', connectionsController.create);
// routes.get('/connections', connectionsController.index);

module.exports = routes;