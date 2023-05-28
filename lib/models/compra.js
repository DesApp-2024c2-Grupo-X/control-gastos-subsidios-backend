import { Model, DataTypes } from 'sequelize';

export default class Compra extends Model {
  static init(sequelize) {
    return super.init(
      {
        fecha: DataTypes.DATE,
        rubro: DataTypes.STRING,
        subrubro: DataTypes.STRING,
        numeroCompra: DataTypes.NUMBER,
        proveedor: DataTypes.STRING,
        monto: DataTypes.DECIMAL(20, 2),
        estado: DataTypes.STRING,
        factura: DataTypes.STRING,
        nombre: DataTypes.STRING,
        idProyecto: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'Compra',
      }
    );
  }
}
