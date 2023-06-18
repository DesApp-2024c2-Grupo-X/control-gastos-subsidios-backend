'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rubros', [
      {
        nombre: 'Insumos',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Bibliografía',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Gastos de Publicación',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Viajes y Viáticos',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Equipamiento',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Servicios Técnicos',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Gastos de Administración',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Rubros', null, {});
     */
    await queryInterface.bulkDelete('Rubros', null, {});
  },
};
