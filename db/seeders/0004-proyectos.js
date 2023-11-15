'use strict';
// generar seed     npx sequelize-cli seed:generate --name proyectos
// insertar seed    npx sequelize-cli db:seed --seed 20230528144304-proyectos
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    // seeders proyectos
    await queryInterface.bulkInsert('Proyectos', [
      {
        titulo:
          'Plataforma abierta de gestion de camaras IP y aplicaciones moviles para la seguridad civil ciudadana',
        tipo: 'Investigación',
        organismo: 'UNLP',
        lineaFinanciamiento: 'UNLP',
        año: '2021-01-01',
        unidadAcademica: 'Facultad de Informática',
        areaTematica: 'Informática',
        fechaInicio: '2021-01-01',
        fechaFin: '2021-12-31',
        fechaInicioGastos: '2021-01-01',
        numeroProyecto: '1',
        numeroExpediente: '1',
        numeroResolucion: '1',
        director: 'Belgrano',
        codirector: 'Codirector 1',
        resumen: 'Resumen 1',
        createdAt: new Date(),
        updatedAt: new Date(),
        idConvocatoria: 1,
      },
      {
        titulo:
          'Desarrollo de software para la monitorización y control de la calidad del aire en tiempo real',
        tipo: 'Investigación 2',
        organismo: 'UNLP',
        lineaFinanciamiento: 'UNLP',
        año: '2021-01-01',
        unidadAcademica: 'Facultad de Informática',
        areaTematica: 'Informática',
        fechaInicio: '2021-01-01',
        fechaFin: '2021-12-31',
        fechaInicioGastos: '2021-01-01',
        numeroProyecto: '1',
        numeroExpediente: '1',
        numeroResolucion: '1',
        director: 'Artigas',
        codirector: 'Codirector 1',
        resumen: 'Resumen 1',
        createdAt: new Date(),
        updatedAt: new Date(),
        idConvocatoria: 2,
      },
      {
        titulo:
          'Desarrollo de un software de gestión de recursos humanos para pequeñas y medianas empresas',
        tipo: 'Investigación 3',
        organismo: 'UNLP',
        lineaFinanciamiento: 'UNLP',
        año: '2021-01-01',
        unidadAcademica: 'Facultad de Informática',
        areaTematica: 'Informática',
        fechaInicio: '2021-01-01',
        fechaFin: '2021-12-31',
        fechaInicioGastos: '2021-01-01',
        numeroProyecto: '1',
        numeroExpediente: '1',
        numeroResolucion: '1',
        director: 'Artigas',
        codirector: 'Codirector 1',
        resumen: 'Resumen 1',
        createdAt: new Date(),
        updatedAt: new Date(),
        idConvocatoria: 3,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // seeders proyectos
    await queryInterface.bulkDelete('Proyectos', null, {});
  },
};
