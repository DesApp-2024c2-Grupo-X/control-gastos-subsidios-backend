import { Model, DataTypes } from 'sequelize';


export default class Rubros extends Model {
 static init(sequelize) {
   return super.init(
    {
      nombre: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Rubros',
    }
   );
 }
 static associations(Rubros) {
  subsidiosAsignados.belongsTo(Rubros, {foreignKeyConstraint:'idRubros',Target: 'id'})
}
}

