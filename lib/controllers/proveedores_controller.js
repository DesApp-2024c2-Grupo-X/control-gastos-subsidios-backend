import Proveedores from '../models/proveedores';

export const getProveedor = async (req, res) => {
  const compraId = req.params.id;
  const proveedor = await Proveedores.findByPk(compraId);

  res.json(proveedor.toJSON());
};

export const getAllProveedores = async (req, res) => {
  const proveedores = await Proveedores.findAll({});
  res.json({ data: proveedores.map((proveedor) => proveedor.toJSON()) });
};

export const postProveedor = async (req, res) => {
  const { nombre, telefono, mail, cuit } = req.body;

  // Verifica que todos los campos requeridos estén presentes
  if (!nombre || !telefono || !mail || !cuit) {
    return res.status(400).send('Faltan campos requeridos');
  }

  // Validar el formato del campo mail utilizando una expresión regular "regex"
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(mail)) {
    return res.status(400).send('El formato de e-mail es inválido');
  }

  try {
    // INSERT ROW
    const proveedor = await Proveedores.create({
      nombre,
      telefono,
      mail,
      cuit,
    });

    return res.status(201).send({ nombre: proveedor.nombre });
  } catch (error) {
    if (error.message) {
      return res.status(404).send('Bad request');
    } else {
      return res.status(500).send({
        message: 'Bad request',
        errorType: error.name,
        errorImage: 'https://http.cat/500',
      });
    }
  }
};

// export const postProveedor = async (req, res) => {
//   //INSERT ROW

//   Proveedores.create({
//     nombre: req.body.nombre,
//     telefono: req.body.telefono,
//     mail: req.body.mail,
//     cuit: req.body.cuit,
//   })
//     .then((proveedor) => res.status(201).send({ nombre: proveedor.nombre }))
//     .catch((error) => {
//       if (error.message) {
//         res.status(404).send('Bad request');
//       } else {
//         res.status(500).send({
//           message: 'Bad request',
//           errorType: error.name,
//           errorImage: 'https://http.cat/500',
//         });
//       }
//     });
// };
