const Sequelize = require('sequelize');
const Op = Sequelize.Op
const {Bus} = require('../models');

module.exports = {
    async create( req, res,) {
        const {
            licensePlate,
            year,
            model,
            seatAmmount,
        } = req.body;
        try {
            const insertedBus = await Bus.create({ 
                licensePlate: licensePlate,
                year: year,
                model: model, 
                seatAmmount: seatAmmount });
                res.send({ 
                    success: true,
                    data: "Bus created"
                });
        }catch (err){
            return res.status(400).json({
                error: err
            });
        }
    },
    async getAll(req, res) {
        const result = await Bus.findAll().then(result => {
            res.send({ 
                success: true,
                data: result
            });
        });
    },
    updateBus(req,res) {

    },
    async deleteBusByLicensePlate(req,res){
        const busToDelete = await Bus.findOne({
            where: {
                licensePlate: req.body.licensePlate
            }
        }).then(async result => {
            console.log(result)
            if (result){
                result.destroy();
                res.send({ 
                    success: true,
                    data: 'bus deleted'
                });
            }else{
                res.send({ 
                    success: false,
                    data: 'bus not found'
                });
            }
        });
    },
    async getBusByLicensePlate(req,res){
        const result = await Bus.findOne({
            where: {
                licensePlate: req.body.licensePlate
            }
        }).then(result => {
            res.send({ 
                success: true,
                data: result
            });
        });
    }
}
