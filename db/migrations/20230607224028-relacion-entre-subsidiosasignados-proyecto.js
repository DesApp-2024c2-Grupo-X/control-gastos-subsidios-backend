'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return [
      queryInterface.addConstraint('SubsidiosAsignados', {
        fields: ['idProyecto'],
        type: 'foreign key',
        name: 'FK_SubsidiosAsignados_Proyecto',
        references: {
          table: 'Proyectos',
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
        'SubsidiosAsignados',
        'FK_SubsidiosAsignados_Proyecto'
      ),
    ];
  },
};
