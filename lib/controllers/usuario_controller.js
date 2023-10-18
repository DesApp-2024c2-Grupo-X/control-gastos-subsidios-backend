import Usuario from '../models/usuario';
import UsuariosProyectos from '../models/usuariosproyectos';

export const index = async (req, res) => {
  const usuarios = await Usuario.findAll({});
  res.json({ data: usuarios.map((usuario) => usuario.toJSON()) });
};

export const searchUser = async (req, res) => {
  const usuario = await Usuario.findOne({
    where: { usuario: req.body.usuario },
  });

  if (usuario) {
    res.json({ data: usuario.toJSON() });
  } else {
    res.status(404).json({
      message: `No se encontró un usuario con id ${req.body.usuario}`,
    });
  }
};

export const searchUserByParam = async (req, res) => {
  const usuario = await Usuario.findOne({
    where: { usuario: req.params.username },
  });

  if (usuario) {
    res.json({ data: usuario.toJSON() });
  } else {
    res.status(404).json({
      message: `No se encontró un usuario con id ${req.body.usuario}`,
    });
  }
};

export const postUsuario = (req, res) => {
  const id = Math.floor(Math.random() * 100);

  //INSERT ROW
  Usuario.create({
    id: id,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    rol: req.body.rol,
    usuario: req.body.usuario,
    contraseña: req.body.contraseña,
    fechaNacimiento: req.body.fechaNacimiento,
    avatar: req.body.avatar,
  })
    .then((usuario) =>
      res.status(201).send({ nombre: usuario.nombre, id: usuario.id })
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
