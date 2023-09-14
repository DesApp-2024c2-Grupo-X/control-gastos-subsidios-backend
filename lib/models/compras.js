import { Model, DataTypes } from 'sequelize';

export default class Compras extends Model {
  static init(sequelize) {
    return super.init(
      {
        fecha: {
          type: DataTypes.DATE,
          validate: {
            isDate: {
              msg: 'ingrese fecha valida',
            },
          },
        },
        numeroCompra: DataTypes.NUMBER,
        monto: {
          type: DataTypes.DECIMAL(20, 2),
          validate: {
            isNumeric: {
              msg: 'Ingrese monto valido',
            },
          },
        },
        estado: DataTypes.STRING,
        factura: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: 'Ingrese factura valida',
            },
          },
        },
        nombre: DataTypes.STRING,
        idSubsidio: DataTypes.INTEGER,
        idProveedor: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'Compras',
      }
    );
  }
  static associate(Model) {
    Compras.belongsTo(Model.SubsidiosAsignados, { foreignKey: 'idSubsidio' });
    Compras.belongsTo(Model.Proveedores, { foreignKey: 'idProveedor' });
  }
}
