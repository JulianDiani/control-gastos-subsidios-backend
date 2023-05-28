'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('Rubros', [
      {
        nombre: 'Insumos',
      }
     * }], {});
    */
    await queryInterface.bulkInsert('Rubros', [
      {
        nombre: 'Bibliografía',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Gastos de Publicación',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Viajes y Viáticos',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Equipamiento',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Servicios Técnicos y Gastos de Administración',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Rubros', null, {});
     */
    await queryInterface.bulkDelete('Rubros', null, {});
  }
};
