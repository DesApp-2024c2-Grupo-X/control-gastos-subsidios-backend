'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Convocatorias', [
      {
        nombre: 'UNAH23-1',
        fechainicio: new Date('Mon Apr 12 2022'),
        fechafin: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'UNAH23-2',
        fechainicio: new Date('Mon Nov 07 2022'),
        fechafin: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'UNAH23-3',
        fechainicio: new Date('Mon Mar 20 2023'),
        fechafin: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Convocatorias', null, {});
  },
};
