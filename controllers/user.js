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
            return res.status(400).send({
                success: false,
                data: " confirmation password must be equal to the password"
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