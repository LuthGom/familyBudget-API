"use strict";

const despesas = require("../../models/despesas");

module.exports = {
  async up(queryInterface, Sequelize) {
    [
      {
        descricao: "Salario",
        valor: 5000.00,
        data: "2022-01-23",
        mes: despesas.data,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
