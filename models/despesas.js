"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Despesas extends Model {
    static associate(models) {
      // define association here
    }
  }
  Despesas.init(
    {
      descricao: DataTypes.STRING,
      valor: DataTypes.FLOAT,
      data: {
        type: DataTypes.DATEONLY,
        defaultValue: new Date(),
      },
      mes: {
        type: DataTypes.STRING,
        defaultValue: new Date().getMonth().toString(),
      },
    },
    {
      sequelize,
      modelName: "Despesas",
    }
  );
  return Despesas;
};
