'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Convocatoria', [
      {
        nombre: 'UNAH22-1',
        fechainicio: new Date('Mon Apr 12 2022'),
        duracionmeses: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'UNAH22-2',
        fechainicio: new Date('Mon Nov 07 2022'),
        duracionmeses: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'UNAH23-Marzo',
        fechainicio: new Date('Mon Mar 20 2023'),
        duracionmeses: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
  ]);
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Convocatoria', null, {});
     
  }
};
