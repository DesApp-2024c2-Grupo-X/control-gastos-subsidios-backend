import { Model, DataTypes } from 'sequelize';


export default class Convocatoria extends Model {
 static
  // associate(models) {
   // define association here
 // }
  init(sequelize) {
   return super.init(
     {
       nombre: DataTypes.STRING,
       fechainicio: DataTypes.DATE,
       duracionmeses: DataTypes.INTEGER
     },
     {
       sequelize,
       modelName: 'Convocatoria',
     }
   );
 }
}
