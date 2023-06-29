import { Model, DataTypes } from 'sequelize';
import UsuariosProyectos from './usuariosproyectos';

export default class Proyectos extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        titulo: DataTypes.STRING,
        tipo: DataTypes.STRING,
        organismo: DataTypes.STRING,
        lineaFinanciamiento: DataTypes.STRING,
        //año: DataTypes.DATE, //este campo no se usa
        convocatoria: DataTypes.STRING, // se agregar convocatoria
        unidadAcademica: DataTypes.STRING,
        areaTematica: DataTypes.STRING,
        //subsidio: DataTypes.INTEGER, //este campo no se usa
        fechaInicio: DataTypes.DATE,
        fechaFin: DataTypes.DATE,
        fechaInicioGastos: DataTypes.STRING,
        numeroProyecto: DataTypes.INTEGER,
        numeroExpediente: DataTypes.INTEGER,
        numeroResolucion: DataTypes.INTEGER,
        director: DataTypes.STRING,
        codirector: DataTypes.STRING,
        //usuario: DataTypes.STRING, //este campo no se usa
        resumen: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Proyectos',
      }
    );
  }

  static associate(Model) {
    Proyectos.hasMany(Model.SubsidiosAsignados, { foreignKey: 'idProyecto' });
    Proyectos.belongsTo(Model.Convocatorias, { foreignKey: 'idconvocatoria' });
    Proyectos.belongsToMany(Model.Usuario, {
      through: UsuariosProyectos,
      foreignKey: 'idProyecto',
    });
  }
}
