import { Model, DataTypes } from 'sequelize';
import Rubros from './rubros';



export default class SubsidiosAsignados extends Model {
 static init(sequelize) {

   return super.init(
    {
      idProyecto: DataTypes.INTEGER,
      idRubro: DataTypes.INTEGER,
      montoAsignado: DataTypes.FLOAT
    }, {
      sequelize,
      modelName: 'SubsidiosAsignados',
    }
   )
 }
 static associations(subsidiosAsignados) {
    Rubros.hasMany(subsidiosAsignados, {foreignKeyConstraint:'idRubros',sourceKey: 'id'})
 }
}

