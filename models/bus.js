'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bus.hasMany(models.Passenger, {
        foreignKey: 'busId',
      })
    }
  };
  Bus.init({
    licensePlate: DataTypes.STRING,
    year: DataTypes.STRING,
    model: DataTypes.STRING,
    seatAmmount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bus',
  });
  return Bus;
};