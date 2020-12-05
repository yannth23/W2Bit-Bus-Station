'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Passenger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
    }
  };
  Passenger.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    CPF: DataTypes.STRING,
    busId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Passenger',
  });
  return Passenger;
};