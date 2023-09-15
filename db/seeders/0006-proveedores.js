'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Proveedores', [
      {
        nombre: 'Libreria Pipo',
        telefono: '4308-6106',
        mail: 'lib.pipo@gmail.com',
        cuit: '22-71489822-8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Turismocity',
        telefono: '0810-810-9994',
        mail: 'subscription@alertas.turismocity.com',
        cuit: '31-70130711-5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Fravega',
        telefono: '0810-888-7110',
        mail: 'atencion@fravega.com',
        cuit: '32-54008821-3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Exo Argentina',
        telefono: '(+5411) 4006-9149',
        mail: 'exo@ecomms.exo.com',
        cuit: '13-71473138-2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Libreria Mayorista S.A.',
        telefono: '4308-6106',
        mail: 'casapaso3@gmail.com',
        cuit: '30-71489822-8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Despegar',
        telefono: '0810-810-9994',
        mail: 'subscription@alertas.despegar.com',
        cuit: '30-70130711-5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Garbarino',
        telefono: '0810-888-7110',
        mail: 'atencion@garbarino.com',
        cuit: '30-54008821-3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Lenovo Argentina',
        telefono: '(+5411) 4006-9149',
        mail: 'lenovo@ecomms.lenovo.com',
        cuit: '30-71473138-2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Proveedores', null, {});
  },
};
