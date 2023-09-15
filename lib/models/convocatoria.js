import { Model, DataTypes } from 'sequelize';

export default class Convocatorias extends Model {
  static // associate(models) {
  // define association here
  // }
  init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nombre: DataTypes.STRING,
        fechainicio: DataTypes.DATE,
        fechafin: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: 'Convocatorias',
      }
    );
  }
  static associate(Model) {
    Convocatorias.hasMany(Model.Proyectos, { foreignKey: 'idConvocatoria' });
  }
}
