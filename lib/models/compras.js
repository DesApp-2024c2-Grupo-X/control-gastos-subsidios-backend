import { Model, DataTypes } from 'sequelize';
//import Proyecto from './proyecto';
export default class Compras extends Model {
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
        modelName: 'Compras',
      }
    );
  }
  static associate(models) {
    Compras.belongsTo(models.Proyectos, {
      foreignKey: 'idProyecto',
    });
  }
}
/*Compras.belongsTo(Proyecto, {
  foreignKey: 'id',
  target_Key: 'idProyecto'
});*/
