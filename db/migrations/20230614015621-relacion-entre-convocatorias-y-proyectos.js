'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return [
      queryInterface.addConstraint('Proyectos', {
        fields: ['idconvocatoria'],
        type: 'foreign key',
        name: 'FK_Proyectos_Convocatorias',
        references: {
          table: 'Convocatorias',
          field: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    ];
  },

  async down(queryInterface, Sequelize) {
    return [
      queryInterface.removeConstraint(
        'Proyectos',
        'FK_Proyectos_Convocatorias'
      ),
    ];
  },
};
