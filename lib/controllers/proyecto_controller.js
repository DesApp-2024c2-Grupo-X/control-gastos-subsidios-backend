import Convocatorias from '../models/convocatoria';
import Proyectos from '../models/proyectos';
import SubsidiosAsignados from '../models/subsidiosasignados';
import Rubros from '../models/rubros';
import Compras from '../models/compras';
import UsuariosProyectos from '../models/usuariosproyectos';
import Usuario from '../models/usuario';

export const getAllProyectos = async (req, res) => {
  const proyecto = await Proyectos.findAll({
    include: [
      { model: Convocatorias },
      { model: SubsidiosAsignados, include: [Rubros] },
      { model: SubsidiosAsignados, include: [Compras] },
    ],
  });
  res.json(proyecto.map((proyecto) => proyecto.toJSON()));
};

export const getAllProyectosConCompras = async (req, res) => {
  const proyectos = await Proyectos.findAll({
    include: [{ model: SubsidiosAsignados, include: [Compras] }],
  });

  proyectos.forEach((proyecto) => {
    let compras = [];
    proyecto['SubsidiosAsignados'].forEach((subsidio) => {
      subsidio['Compras'].forEach((compra) => {
        compras.push(compra);
      });
    });
    proyecto.setDataValue('Compras', compras);
    proyecto.setDataValue('SubsidiosAsignados', ''); // TODO: Eliminar variable
  });
  res.json(proyectos.map((proyecto) => proyecto.toJSON()));
};

export const getProyecto = async (req, res) => {
  const user = req.body.user;
  console.log('User', user);
  const proyecto = await Proyectos.findAll({});
  const proyectoForUser = proyecto.filter(
    (proyecto) => proyecto.usuario === user
  );
  res.json(proyectoForUser);
};

export const getProyectoByParam = async (req, res) => {
  const usuario = await Usuario.findOne({
    where: { usuario: req.params.username },
    include: [
      {
        model: Proyectos,
        through: UsuariosProyectos,
      },
    ],
  });
  console.log('Poryecto por usuario: ', usuario);
  if (usuario) {
    res.json(usuario.Proyectos);
  } else {
    res.status(404).json({
      message: `No se encontró un usuario con id ${req.body.usuario}`,
    });
  }

  /*
  const usuario = Usuario.findAll({
    include: [
      {
        model: Proyectos, // Incluye el modelo de Proyecto en la consulta
        through: UsuariosProyectos, // Utiliza la tabla intermedia UsuariosProyectos
      },
    ],
  });
  */
  //res.json(usuario);
};

export const getProyectoById = async (req, res) => {
  const idProyecto = req.body.id;
  const proyecto = await Proyectos.findAll({});
  const selectedProyecto = proyecto.filter(
    (proyecto) => proyecto.id == idProyecto
  );
  res.json(selectedProyecto);
};

export const getProyectoByIdByParam = async (req, res) => {
  console.log(req.params);
  const idProyecto = req.params.idProyecto;
  const proyectos = await Proyectos.findAll({});
  const selectedProyecto = proyectos.filter(
    (proyecto) => proyecto.id == idProyecto
  );
  res.json(selectedProyecto);
};

export const getProyectoByIdConCompra = async (req, res) => {
  const idProyecto = req.body.id;
  const proyecto = await Proyectos.findOne({
    include: [{ model: SubsidiosAsignados, include: [Compras] }],
    where: {
      id: idProyecto,
    },
  });

  let compras = [];
  proyecto['SubsidiosAsignados'].forEach((subsidio) => {
    subsidio['Compras'].forEach((compra) => {
      compras.push(compra);
    });
  });
  proyecto.setDataValue('Compras', compras);
  proyecto.setDataValue('SubsidiosAsignados', ''); // TODO: Eliminar variable
  res.json(proyecto.toJSON());
};

export const createProyecto = async (req, res) => {
  const body = req.body;
  const usuarios = body.usuario; //lista de usuarios
  const subsidios = body.subsidios; //lista de subsidios
  try {
    const proyecto = await Proyectos.create({
      titulo: body.titulo,
      tipo: body.tipo,
      organismo: body.organismo,
      lineaFinanciamiento: body.lineaFinanciamiento,
      año: body.año,
      unidadAcademica: body.unidadAcademica,
      areaTematica: body.areaTematica,
      fechaInicio: body.fechaInicio,
      fechaFin: body.fechaFin,
      fechaInicioGastos: body.fechaInicioGastos,
      numeroProyecto: body.numeroProyecto,
      numeroExpediente: body.numeroExpediente,
      numeroResolucion: body.numeroResolucion,
      director: body.director,
      codirector: body.codirector,
      resumen: body.resumen,
      idConvocatoria: body.idConvocatoria,
    }).catch((error) => {
      if (error.message) {
        console.log(error.message);
        res.status(404).send('Bad request ' + error.message);
      } else {
        res.status(500).send({
          message: 'Bad request ',
          errorType: error.name,
          errorImage: 'https://http.cat/500',
        });
      }
    });
    await usuarios.forEach((usuario) => {
      UsuariosProyectos.create({
        idUsuario: usuario.id,
        idProyecto: proyecto.id,
      });
    });
    await subsidios.forEach((subsidio) => {
      SubsidiosAsignados.create({
        idProyecto: proyecto.id,
        idRubro: subsidio.id,
        montoAsignado: subsidio.monto,
      });
    });

    res.status(201).send({ idProyecto: proyecto.id, titulo: body.titulo });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Internal server error');
  }
};
