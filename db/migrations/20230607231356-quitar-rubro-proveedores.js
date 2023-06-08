'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Proveedores', 'rubro');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Proveedores');
  },
};
