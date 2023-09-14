'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      usuario: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      contraseña: {
        type: Sequelize.STRING,
      },
      fechaNacimiento: {
        type: Sequelize.DATEONLY,
      },
      apellido: {
        type: Sequelize.STRING,
      },
      avatarUrl: {
        type: Sequelize.STRING,
      },
      rol: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usuarios');
  },
};
