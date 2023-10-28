'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UsuariosProyectos', [
      {
        idUsuario: 3,
        idProyecto: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idUsuario: 2,
        idProyecto: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idUsuario: 3,
        idProyecto: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UsuariosProyectos', null, {});
  },
};
