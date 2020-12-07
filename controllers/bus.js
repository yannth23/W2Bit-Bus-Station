const Sequelize = require('sequelize');
const Op = Sequelize.Op
const {Bus} = require('../models');

module.exports = {
    //todo: validação para ver se o usuário existe
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
    async updateBusByLicensePlate(req,res) {
        const {
            licensePlate,
            year,
            model,
            seatAmmount 
        } = req.body;
        await Bus.findOne({
            where: {
                licensePlate: req.params.licensePlate
            }
        }).then(result => {
            if (result){
                result.year = year;
                result.model = model;
                result.seatAmmount = seatAmmount;
                result.save();
                res.send({ 
                    success: true,
                    data: 'bus updated'
                });
            }else{
                res.send({ 
                    success: false,
                    data: 'bus not found'
                });
            }
        });
        
        
    },
    async deleteBusByLicensePlate(req,res){
        const busToDelete = await Bus.findOne({
            where: {
                licensePlate: req.params.licensePlate
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
                licensePlate: req.params.licensePlate
            }
        }).then(result => {
            res.send({ 
                success: true,
                data: result
            });
        });
    }
}
