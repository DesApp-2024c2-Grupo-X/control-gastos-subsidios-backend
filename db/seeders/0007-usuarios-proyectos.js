'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UsuariosProyectos', [
      {
        id: 1,
        idUsuario: 1,
        idProyecto: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        idUsuario: 2,
        idProyecto: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        idUsuario: 3,
        idProyecto: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UsuariosProyectos', null, {});
  },
};
