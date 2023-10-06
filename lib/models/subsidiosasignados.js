import { Model, DataTypes } from 'sequelize';

export default class SubsidiosAsignados extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        idProyecto: DataTypes.INTEGER,
        idRubro: DataTypes.INTEGER,
        montoAsignado: DataTypes.FLOAT,
        subRubro: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'SubsidiosAsignados',
      }
    );
  }

  static associate(Model) {
    SubsidiosAsignados.belongsTo(Model.Rubros, { foreignKey: 'idRubro' });
    SubsidiosAsignados.hasMany(Model.Compras, { foreignKey: 'idSubsidio' });
    SubsidiosAsignados.belongsTo(Model.Proyectos, { foreignKey: 'idProyecto' });
  }
}
