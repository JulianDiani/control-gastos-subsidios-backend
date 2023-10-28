'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Compras', [
      {
        fecha: new Date(),
        numeroCompra: 1,
        monto: 2000,
        estado: 'Pendiente',
        factura: '0001',
        cae: '1235',
        nombre: 'Mouse',
        idSubsidio: 1,
        idProveedor: 1,
        subRubro: 'Ejemplo subRubro',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fecha: new Date(),
        numeroCompra: 2,
        monto: 1500,
        estado: 'Pendiente',
        factura: '0002',
        cae: '2234',
        nombre: 'Manuales de informatica',
        idSubsidio: 2,
        idProveedor: 2,
        subRubro: 'Ejemplo subRubro',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fecha: new Date(),
        numeroCompra: 3,
        monto: 3500,
        estado: 'Pendiente',
        factura: '0003',
        cae: '9789',
        nombre: 'Publicidad',
        idSubsidio: 14,
        idProveedor: 3,
        subRubro: 'Ejemplo subRubro',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fecha: new Date(),
        numeroCompra: 4,
        monto: 25000,
        estado: 'Pendiente',
        factura: '0004',
        cae: '1122',
        nombre: 'Viaje a la India',
        idSubsidio: 15,
        idProveedor: 4,
        subRubro: 'Ejemplo subRubro',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fecha: new Date(),
        numeroCompra: 5,
        monto: 12000,
        estado: 'Aprobado',
        factura: '0005',
        cae: '5622',
        nombre: 'Casco realidad virtual',
        idSubsidio: 16,
        idProveedor: 5,
        subRubro: 'Ejemplo subRubro',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fecha: new Date(),
        numeroCompra: 6,
        monto: 2000,
        estado: 'Aprobado',
        factura: '0006',
        cae: '123555',
        nombre: 'Papeleria',
        idSubsidio: 6,
        idProveedor: 6,
        subRubro: 'Ejemplo subRubro',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fecha: new Date(),
        numeroCompra: 7,
        monto: 200,
        estado: 'Aprobado',
        factura: '0007',
        cae: '1002',
        nombre: 'Lapiceras',
        idSubsidio: 7,
        idProveedor: 7,
        subRubro: 'Ejemplo subRubro',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fecha: new Date(),
        numeroCompra: 8,
        monto: 1000,
        estado: 'Aprobado',
        factura: '0008',
        cae: '225566',
        nombre: 'Libro de historia',
        idSubsidio: 8,
        idProveedor: 8,
        subRubro: 'Ejemplo subRubro',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Compras', null, {});
  },
};
