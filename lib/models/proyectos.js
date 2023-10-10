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
        titulo: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: 'ingrese titulo valido',
            },
          },
        },
        tipo: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: 'ingrese tipo valido',
            },
          },
        },
        organismo: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: 'ingrese organismo valido',
            },
          },
        },
        lineaFinanciamiento: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: 'ingrese linea de financiamiento valida',
            },
          },
        },
        año: DataTypes.DATE,
        unidadAcademica: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: 'ingrese unidad Academica valida',
            },
          },
        },
        areaTematica: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: 'ingrese area tematica valida',
            },
          },
        },
        fechaInicio: {
          type: DataTypes.DATEONLY,
          validate: {
            isDate: {
              msg: 'ingrese fecha valida',
            },
          },
        },
        fechaFin: {
          type: DataTypes.DATEONLY,
          validate: {
            isDate: {
              msg: 'ingrese fecha valida',
            },
          },
        },
        fechaInicioGastos: DataTypes.STRING,
        numeroProyecto: DataTypes.INTEGER,
        numeroExpediente: DataTypes.INTEGER,
        numeroResolucion: DataTypes.INTEGER,
        director: DataTypes.STRING,
        codirector: DataTypes.STRING,
        resumen: DataTypes.STRING,
        idConvocatoria: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'Proyectos',
      }
    );
  }

  static associate(Model) {
    Proyectos.hasMany(Model.SubsidiosAsignados, { foreignKey: 'idProyecto' });
    Proyectos.belongsTo(Model.Convocatorias, { foreignKey: 'idConvocatoria' });
    Proyectos.belongsToMany(Model.Usuario, {
      through: UsuariosProyectos,
      foreignKey: 'idProyecto',
    });
  }
}
