const Sequelize = require('sequelize');
const Op = Sequelize.Op
const {Bus} = require('../models');

module.exports = {
    createBus( req, res,) {
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
        // const busToDelete = await Bus.findOne({
        //     where: {
        //         licensePlate: req.body.licensePlate
        //     }
        // }).then(async result => {
        //     if (result){
        //         await Bus.delete(result);
        //         res.send({ 
        //             success: true,
        //             data: 'bus deleted'
        //         });
        //     }else{
        //         res.send({ 
        //             success: false,
        //             data: 'bus not found'
        //         });
        //     }
        // });
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
