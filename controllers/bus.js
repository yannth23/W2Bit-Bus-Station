const {Bus, User} = require('../models');

module.exports = {
    async create( req, res,) {
        const {
            licensePlate,
            year,
            model,
            seatAmmount,
            userId
        } = req.body;
        try {
            if (userId == undefined){
                return res.send({ 
                    success: false,
                    data: "user parameter must be passed"
                }); 
            }
            await User.findOne({where:{id: userId}}).then(response => {
                console.log(response)
                if(!response){
                    return res.send({ 
                        success: false,
                        data: "User not found"
                    }); 
                }
            });

            await Bus.create({ 
                licensePlate: licensePlate,
                year: year,
                model: model, 
                seatAmmount: seatAmmount,
                userId: userId
            });
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
        await Bus.findAll().then(result => {
            res.send({ 
                success: true,
                data: result
            });
        });
    },
    async update(req,res) {
        const {
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
    async delete(req,res){
        await Bus.findOne({
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
        await Bus.findOne({
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
