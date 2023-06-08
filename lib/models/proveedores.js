import { Model, DataTypes } from 'sequelize';

export default class Proveedores extends Model {
  static init(sequelize) {
    return super.init(
      {
        nombre: DataTypes.STRING,
        telefono: DataTypes.STRING,
        mail: DataTypes.STRING,
        cuit: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Proveedores',
      }
    );
  }

  static associate(Model) {
    Proveedores.hasMany(Model.Compras, { foreignKey: 'idproveedor' });
  }
}
