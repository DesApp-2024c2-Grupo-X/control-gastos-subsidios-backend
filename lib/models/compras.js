import { Model, DataTypes } from 'sequelize';

export default class Compras extends Model {
  static init(sequelize) {
    return super.init(
      {
        //fecha: DataTypes.DATE,
        fecha: {
          type: DataTypes.DATE,
          validate: {
            isDate: {
              msg: 'ingrese fecha valida',
            },
          },
        },
        rubro: DataTypes.STRING,
        //subrubro: DataTypes.STRING,
        numeroCompra: DataTypes.NUMBER,
        proveedor: DataTypes.STRING,
        //monto: DataTypes.DECIMAL(20, 2),
        monto: {
          type: DataTypes.DECIMAL(20, 2),
          validate: {
            isNumeric: {
              msg: 'Ingrese monto valido',
            },
          },
        },
        estado: DataTypes.STRING,
        //factura: DataTypes.STRING,
        factura: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: 'Ingrese factura valida',
            },
          },
        },
        nombre: DataTypes.STRING,
        idProyecto: DataTypes.INTEGER,
        idsubsidio: DataTypes.INTEGER,
        idproveedor: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'Compras',
      }
    );
  }
  static associate(Model) {
    Compras.belongsTo(Model.SubsidiosAsignados, { foreignKey: 'idsubsidio' });
    Compras.belongsTo(Model.Proveedores, { foreignKey: 'idproveedor' });
  }
}
