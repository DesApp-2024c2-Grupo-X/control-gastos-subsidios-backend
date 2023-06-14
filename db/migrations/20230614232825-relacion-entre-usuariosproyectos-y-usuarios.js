'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return [
      queryInterface.addConstraint('UsuariosProyectos', {
        fields: ['idUsuario'],
        type: 'foreign key',
        name: 'FK_UsuariosProyectos_Usuarios',
        references: {
          table: 'Usuario',
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
        'UsuariosProyectos',
        'FK_UsuariosProyectos_Usuarios'
      ),
    ];
  },
};
