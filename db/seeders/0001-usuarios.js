'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
      {
        usuario: 'azurduy',
        contraseña: '123456',
        rol: 'admin',
        nombre: 'Juana',
        apellido: 'Azurduy',
        fechaNacimiento: '1780-07-12',
        avatarUrl: 'http://www.laizquierdadiario.com/IMG/arton21559.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        usuario: 'artigas',
        contraseña: '123456',
        rol: 'otro',
        nombre: 'José',
        apellido: 'Artigas',
        fechaNacimiento: '1764-06-19',
        avatarUrl: 'http://www.laizquierdadiario.com/IMG/arton21559.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        usuario: 'bolivar',
        contraseña: '123456',
        rol: 'otro',
        nombre: 'Simón',
        apellido: 'Bolivar',
        fechaNacimiento: '1783-07-24',
        avatarUrl: 'http://www.laizquierdadiario.com/IMG/arton21559.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        usuario: 'Belgrano',
        contraseña: '123456',
        rol: 'admin',
        nombre: 'Manuel',
        apellido: 'Belgrano',
        fechaNacimiento: '1770-06-03',
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
