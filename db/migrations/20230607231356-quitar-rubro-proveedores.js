'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Proveedores', 'rubro');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Proveedores');
  },
};
