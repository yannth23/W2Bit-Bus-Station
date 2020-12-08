const {Passenger, Bus} = require('../models');

module.exports = {
    async create(req, res) {
        const {
            CPF,
            name,
            age,
            busId
        } = req.body;
        try {
            if (busId == undefined) {
                return res.status(400).send({
                    success: false,
                    data: "bus parameter must be passed"
                });
            }

            await Bus.findOne({where: {id: busId}}).then(async bus => {
                if (!bus) {
                    return res.status(400).send({
                        success: false,
                        data: "Bus not found"
                    });
                } else {
                    await Passenger.findAndCountAll({where: {busId: busId}}).then(passengers => {
                        console.log(passengers)
                        if (passengers.count > bus.seatAmmount) {
                            return res.status(400).send({
                                success: false,
                                data: "Bus has reached its maximum capacity"
                            });
                        }
                    })
                }
            });

            await Passenger.findOne({where: {CPF: CPF}}).then(response => {
                if (response) {
                    return res.status(400).send({
                        success: false,
                        data: "Passenger already created"
                    });
                }
            });

            await Passenger.create({
                CPF: CPF,
                age: age,
                name: name,
                busId: busId
            });
            res.send({
                success: true,
                data: "Passenger created"
            });
        } catch (err) {
            return res.status(400).send({
                error: err
            });
        }
    },
    async update(req,res) {
        const {
            name,
            age,
            busId
        } = req.body;
        console.log(req.params.CPF)
        await Passenger.findOne({
            where: {
                CPF: req.params.CPF
            }
        }).then(result => {
            if (result){
                result.name = name;
                result.age = age;
                result.busId = busId
                result.save();
                res.send({ 
                    success: true,
                    data: 'Passenger updated'
                });
            }else{
                res.status(400).send({
                    success: false,
                    data: 'Passenger not found'
                });
            }
        });
    },
    async delete(req,res){
        await Passenger.findOne({
            where: {
                CPF: req.params.CPF
            }
        }).then(async result => {
            if (result){
                result.destroy();
                res.send({ 
                    success: true,
                    data: 'Passenger deleted'
                });
            }else{
                res.status(400).send({
                    success: false,
                    data: 'Passenger not found'
                });
            }
        });
    },
}