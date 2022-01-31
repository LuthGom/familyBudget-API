'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Despesas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
        notEmpty: true
      },
      data: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        notEmpty: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Despesas');
  }
};