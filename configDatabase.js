const Sequelize = require('sequelize')
const sequelize = new Sequelize('test','root','123456',{
    host:"localhost",
    dialect:"postgres"}
)
module.exports = sequelize