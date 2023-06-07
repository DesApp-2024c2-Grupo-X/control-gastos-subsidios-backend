'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return [
      queryInterface.addConstraint('Compras', {
        fields: ['idsubsidio'],
        type: 'foreign key',
        name: 'FK_Compras_SubsidiosAsignados',
        references: {
          table: 'SubsidiosAsignados',
          field: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    ];
  },

  async down(queryInterface, Sequelize) {
    /**
     * await queryInterface.dropTable('users');
     */
    return [
      queryInterface.removeConstraint(
        'Compras',
        'FK_Compras_SubsidiosAsignados'
      ),
    ];
  },
};
