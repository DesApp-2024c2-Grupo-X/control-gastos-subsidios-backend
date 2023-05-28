'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    return [
      queryInterface.addConstraint('SubsidiosAsignados', {
        fields: ['idRubro'],
        type: 'foreign key',
        name: 'FK_SubsidiosAsignados_Rubros',
        references: {
          table: 'Rubros',
          field: 'id',
        },
        onDelete: 'no action',
        onUpdate: 'no action',
      }),
    ]
 
  },

  async down (queryInterface, Sequelize) {

    return [
      queryInterface.removeConstraint('SubsidiosAsignados', 'FK_SubsidiosAsignados_Rubros'),
    ]
 
  }
};
