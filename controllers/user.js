const Sequelize = require('sequelize');
const Op = Sequelize.Op
const {User} = require('../models');

module.exports = {
    async create( req, res,) {
        const {
            name,
            picture,
            city,
            state,
            password,
            confirmPassword
        } = req.body;

        if (password !== confirmPassword){
            return res.send({ 
                success: false,
                data: "the confirm password must be equal to the password"
            });
        }

        try {
            await User.create({ 
                name: name,
                picture: picture, 
                city: city,
                state: state,
                password: password
            });
            res.send({ 
                success: true,
                data: "User created"
            });
        }catch (err){
            return res.status(400).json({
                error: err
            });
        }
    }
}