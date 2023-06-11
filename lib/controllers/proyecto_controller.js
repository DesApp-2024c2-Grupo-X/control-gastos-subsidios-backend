import Proyecto from '../models/proyectos';
// import SubsidiosAsignados from '../models/subsidiosasignados';
// import Rubros from '../models/rubros';
// import Compras from '../models/compras';

export const getAllProyecto = async (req, res) => {
  const proyectosEncontrados = await Proyecto.findAll({
    /*include: [
      {
        model: SubsidiosAsignados,
        include: [Rubros, Compras],
      },
    ],*/
  });
  res.json(proyectosEncontrados.map((unproyecto) => unproyecto.toJSON()));
};

export const getAllProyectos = async (req, res) => {
  const proyecto = await Proyecto.findAll({});
  res.json(proyecto.map((proyecto) => proyecto.toJSON()));
};

export const getProyecto = async (req, res) => {
  const user = req.body.user;
  console.log('User', user);
  const proyecto = await Proyecto.findAll({});
  const proyectoForUser = proyecto.filter(
    (proyecto) => proyecto.usuario === user
  );
  res.json(proyectoForUser);
};

export const getProyectoById = async (req, res) => {
  const idProyecto = req.body.id;
  const proyecto = await Proyecto.findAll({});
  const selectedProyecto = proyecto.filter(
    (proyecto) => proyecto.id == idProyecto
  );
  res.json(selectedProyecto);
};

export const createProyecto = (req, res) => {
  const id = Math.floor(Math.random() * 100);
  const body = req.body;
  Proyecto.create({
    id: id,
    titulo: body.titulo,
    tipo: body.tipo,
    organismo: body.organismo,
    lineaFinanciamiento: body.lineaFinanciamiento,
    año: body.año,
    unidadAcademica: body.unidadAcademica,
    areaTematica: body.areaTematica,
    subsidio: body.subsidio,
    fechaInicio: body.fechaInicio,
    fechaFin: body.fechaFin,
    numeroProyecto: body.numeroProyecto,
    numeroExpediente: body.numeroExpediente,
    numeroResolucion: body.numeroResolucion,
    director: body.director,
    codirector: body.codirector,
    usuario: body.usuario,
  })
    .then((proyecto) =>
      res.status(201).send({ idProyecto: proyecto.id, titulo: body.titulo })
    )
    .catch((error) => {
      if (error.message) {
        console.log(error.message);
        res.status(404).send('Bad request ' + error.message);
      } else {
        res.status(500).send({
          message: 'Bad request',
          errorType: error.name,
          errorImage: 'https://http.cat/500',
        });
      }
    });
};
