'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Compras', 'idproveedor', {
      type: Sequelize.INTEGER,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropColumn('Compras', 'idproveedor');
  },
};
