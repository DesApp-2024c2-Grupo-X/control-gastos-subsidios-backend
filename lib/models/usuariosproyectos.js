import { Model, DataTypes } from 'sequelize';


export default class UsuariosProyectos extends Model {
 static init(sequelize) {
   return super.init(
    {
      idUsuario: DataTypes.INTEGER,
      idProyecto: DataTypes.INTEGER
    }, {
      sequelize,
      modelName: 'UsuariosProyectos',
    }
   );
 }

}