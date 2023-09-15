'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('SubsidiosAsignados', [
      {
        idProyecto: 1,
        idRubro: 1,
        montoAsignado: 10500.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idProyecto: 2,
        idRubro: 2,
        montoAsignado: 14500.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idProyecto: 3,
        idRubro: 3,
        montoAsignado: 8400.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idProyecto: 1,
        idRubro: 4,
        montoAsignado: 12400.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idProyecto: 2,
        idRubro: 5,
        montoAsignado: 150000.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idProyecto: 3,
        idRubro: 6,
        montoAsignado: 90000.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('SubsidiosAsignados', null, {});
  },
};
