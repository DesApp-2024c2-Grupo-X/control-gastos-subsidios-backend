'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
      {
        usuario: 'admin',
        contraseña: '123456',
        rol: 'admin',
        nombre: 'Ramiro',
        apellido: 'Ambrosetti',
        fechaNacimiento: '1999-12-06',
        avatarUrl: 'http://www.laizquierdadiario.com/IMG/arton21559.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        usuario: 'otro',
        contraseña: '123456',
        rol: 'otro',
        nombre: 'Otro',
        apellido: 'Usuario',
        fechaNacimiento: '2000-05-02',
        avatarUrl: 'http://www.laizquierdadiario.com/IMG/arton21559.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        usuario: 'otro2',
        contraseña: '123456',
        rol: 'otro',
        nombre: 'Otro2',
        apellido: 'Usuario',
        fechaNacimiento: '2000-05-02',
        avatarUrl: 'http://www.laizquierdadiario.com/IMG/arton21559.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  },
};
