import Proyecto from '../models/proyecto';
import Compra from '../models/compras';

export const getProyecto = async (req, res) => {
  const user = req.params.username;
  const proyectos = await Proyecto.findAll({});
  const proyectosForUser = proyectos.filter(
    (proyecto) => proyecto.usuario === user
  );
  res.json(proyectosForUser);
};

export const getProyectoById = async (req, res) => {
  console.log(req.params);
  const idProyecto = req.params.idProyecto;
  const proyectos = await Proyecto.findAll({});
  const selectedProyecto = proyectos.filter(
    (proyecto) => proyecto.id == idProyecto
  );
  res.json(selectedProyecto);
};

export const getProyectoByIdConCompra = async (req, res) => {
  const idProyecto = req.body.id;
  const proyectos = await Proyecto.findAll({
    include: [{ model: Compra }],
  });
  const selectedProyecto = proyectos.filter(
    (proyecto) => proyecto.id == idProyecto
  );
  res.json(selectedProyecto);
};

export const getAllProyectos = async (req, res) => {
  const proyectos = await Proyecto.findAll({});
  res.json(proyectos.map((proyecto) => proyecto.toJSON()));
};

export const getAllProyectosConCompras = async (req, res) => {
  const proyectos = await Proyecto.findAll({
    include: [{ model: Compra }],
  });
  res.json(proyectos.map((proyecto) => proyecto.toJSON()));
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
