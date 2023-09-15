import { Model, DataTypes } from 'sequelize';

export default class Rubros extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nombre: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Rubros',
      }
    );
  }

  static associate(Model) {
    Rubros.hasMany(Model.SubsidiosAsignados, { foreignKey: 'idRubro' });
  }
}
