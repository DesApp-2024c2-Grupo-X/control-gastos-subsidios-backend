'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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
         idRubro: 2,
         montoAsignado: 10500.00,
         createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        idProyecto: 1,
        idRubro: 3,
        montoAsignado: 14500.00,
        createdAt: new Date(),
       updatedAt: new Date(),
      },
      {
        idProyecto: 1,
        idRubro: 4,
        montoAsignado: 8400.00,
        createdAt: new Date(),
       updatedAt: new Date(),
      },
      {
        idProyecto: 1,
        idRubro: 5,
        montoAsignado: 228400.00,
        createdAt: new Date(),
       updatedAt: new Date(),
      },
      {
        idProyecto: 1,
        idRubro: 6,
        montoAsignado: 15000.00,
        createdAt: new Date(),
       updatedAt: new Date(),
      }
      ],
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('SubsidiosAsignados', null, {});
  }
};
