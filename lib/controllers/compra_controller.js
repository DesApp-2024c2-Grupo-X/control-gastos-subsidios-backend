import Compras from '../models/compras';
import SubsidiosAsignados from '../models/subsidiosasignados';
import Rubros from '../models/rubros';
import Proveedores from '../models/proveedores';
import Proyectos from '../models/proyectos';
import { Sequelize } from 'sequelize';

export const getComprasByProyecto = async (req, res) => {
  const compras = await Compras.findAll({
    include: [
      {
        model: SubsidiosAsignados,
        include: [Rubros],
      },
      { model: Proveedores },
    ],
  });
  res.json(
    compras.filter(
      (compra) => compra.SubsidiosAsignado.idProyecto == req.params.idProyecto
    )
  );
};

export const getCompraByProyectId = async (req, res) => {
  const idProyecto = req.params.idProyecto;
  const compras = await Compras.findAll({
    include: [{ model: SubsidiosAsignados, include: [Proyectos] }],
  });
  const compraFiltrado = [];
  compras.forEach((compra) => {
    const sub = compra['SubsidiosAsignado'];
    if (sub) {
      const proyecto = sub['Proyecto'];
      compra.setDataValue('Proyecto', proyecto);
      compra.setDataValue('SubsidiosAsignado', ''); // TODO: Eliminar variable
      if (proyecto['id'] == idProyecto) {
        compraFiltrado.push(compra);
      }
    }
  });
  res.json(compraFiltrado);
};

export const getCompraById = async (req, res) => {
  const id = req.params.idCompra;
  const compra = await Compras.findOne({
    where: {
      id: id,
    },
    include: [{ model: SubsidiosAsignados, include: [Rubros] }],
  });
  res.json(compra);
};

export const getCompraByIdConProyecto = async (req, res) => {
  const id = req.body.id;
  const compras = await Compras.findAll({
    where: {
      id: id,
    },
    include: [{ model: SubsidiosAsignados, include: [Proyectos] }],
  });
  compras.forEach((compra) => {
    const sub = compra['SubsidiosAsignado'];
    if (sub) {
      compra.setDataValue('Proyecto', sub['Proyecto']);
      compra.setDataValue('SubsidiosAsignado', ''); // TODO: Eliminar variable
    }
  });
  res.json(compras.map((compra) => compra.toJSON()));
};

export const getAllComprasConProyecto = async (req, res) => {
  const compras = await Compras.findAll({
    include: [{ model: SubsidiosAsignados, include: [Proyectos] }],
  });
  compras.forEach((compra) => {
    const sub = compra['SubsidiosAsignado'];
    if (sub) {
      compra.setDataValue('Proyecto', sub['Proyecto']);
      compra.setDataValue('SubsidiosAsignado', ''); // TODO: Eliminar variable
    }
  });
  res.json(compras.map((compra) => compra.toJSON()));
};

export const getAllComprasNueva = async (req, res) => {
  const compras = await Compras.findAll({
    include: [
      {
        model: SubsidiosAsignados,
        include: [Rubros],
      },
      { model: Proveedores },
    ],
  });
  res.json(compras.map((compra) => compra.toJSON()));
};

export const getAllCompras = async (req, res) => {
  const compras = await Compras.findAll({});
  //res.json(compras.map((compra) => compra.toJSON()));
  res.json(
    compras.map((compra) => ({
      id: compra.id,
      fecha: compra.fecha,
      rubro: compra.rubro,
      subrubro: compra.subrubro,
      numeroCompra: compra.numeroCompra,
      proveedor: compra.proveedor,
      monto: compra.monto,
      estado: compra.estado,
      factura: compra.factura,
      cae: compra.cae,
      nombre: compra.nombre,
      createdAt: compra.createdAt,
      updatedAt: compra.updatedAt,
      idProyecto: compra.idProyecto,
      idSubsidio: compra.idsubsidio,
    }))
  );
};

const getLastNumeroCompraByProyecto = async (proyecto) => {
  const subsidiosIDs = [];
  const subsidiosEncontrado = await SubsidiosAsignados.findAll({
    where: {
      idProyecto: parseInt(proyecto),
    },
  });
  subsidiosEncontrado.forEach((subsidio) => {
    subsidiosIDs.push(subsidio.id);
  });
  if (subsidiosEncontrado) {
    const comprasPorProyecto = await Compras.findAll({
      where: {
        idSubsidio: {
          [Sequelize.Op.in]: subsidiosIDs,
        },
      },
      order: [['numeroCompra', 'ASC']],
    });
    console.log(comprasPorProyecto);
    return comprasPorProyecto.length > 0
      ? comprasPorProyecto[comprasPorProyecto.length - 1].numeroCompra
      : null;
  } else {
    return null;
  }
};

export const postCompra = async (req, res) => {
  const ultimoNumeroCompra = await getLastNumeroCompraByProyecto(
    req.body.proyecto
  );
  Compras.create({
    fecha: req.body.fecha,
    monto: req.body.monto,
    numeroCompra: ultimoNumeroCompra ? ultimoNumeroCompra + 1 : 1,
    estado: req.body.estado,
    factura: req.body.factura,
    cae: req.body.cae,
    nombre: req.body.nombre,
    idSubsidio: req.body.idsubsidio,
    idProveedor: req.body.idproveedor,
    subRubro: req.body.subrubro,
  })
    .then((compra) => res.status(201).send({ nombre: compra.nombre }))
    .catch((error) => {
      if (error.message) {
        res.status(404).send(error.message);
      } else {
        res.status(500).send({
          message: 'Serivice error',
          errorType: error.name,
          errorImage: 'https://http.cat/500',
        });
      }
    });
};

export const putCompra = async (req, res) => {
  const id = req.params.id;
  const findCompra = await Compras.findOne({
    where: { id },
  });
  findCompra
    .update({
      estado: req.body.estado,
    })
    .then(() => res.sendStatus(200))
    .catch((error) => {
      console.log(`Error al intentar actualizar la base de datos: ${error}`);
      res.sendStatus(500);
    });
};

export const getCompraTotal = async (req, res) => {
  const id = Number(req.params.id);
  const comprasPorRubro = [];
  const compras = await Compras.findAll({
    where: { estado: ['Aprobado', 'Pendiente'] },
    include: [{ model: SubsidiosAsignados, include: [Proyectos, Rubros] }],
  });
  const comprasFiltrado = [];
  compras.forEach((compra) => {
    const sub = compra['SubsidiosAsignado'];
    if (sub) {
      const proyecto = sub['Proyecto'];
      if (proyecto['id'] == id) {
        comprasFiltrado.push(compra);
      }
    }
  });
  comprasFiltrado.forEach((compra) => {
    const rubro = compra['SubsidiosAsignado']['Rubro']['nombre'];
    const estado = compra['estado'] || '';
    const monto = compra['monto'] || '';
    const existeRubro = comprasPorRubro.find((item) => item.rubro === rubro);
    if (!existeRubro) {
      let gastosAprobados = 0;
      let gastosPendientes = 0;

      if (estado === 'Aprobado') {
        gastosAprobados = Number(monto);
      } else if (estado === 'Pendiente') {
        gastosPendientes = Number(monto);
      }
      comprasPorRubro.push({
        rubro: rubro,
        gastosAprobados,
        gastosPendientes,
      });
    } else {
      if (estado === 'Aprobado') {
        existeRubro.gastosAprobados += Number(monto);
      } else if (estado === 'Pendiente') {
        existeRubro.gastosPendientes += Number(monto);
      }
    }
  });
  res.json(comprasPorRubro);
};

export const getTotal = async (req, res) => {
  const gastosTotales = await Compras.sum('monto');
  res.json({ totalGastos: gastosTotales });
};

export const findByRubro = async (req, res) => {
  const compras = await Compras.findAll();
  const comprasByProyecto = compras.filter(
    (compra) => compra.idProyecto == req.body.idProyecto
  );
  const filterComprasByRubro = comprasByProyecto.filter(
    (compra) => compra.rubro.toLowerCase() === req.body.rubro.toLowerCase()
  );
  let total = 0;
  filterComprasByRubro.map((compra) => (total += parseInt(compra.monto)));
  res.json({ rubro: req.body.rubro, totalGastado: total });
};

//getComprasXSubsidio: devuelve el total sumando todas las compras, que corresponden
//a un subsidio.
export const getTotalComprasXSubsidio = async (req, res) => {
  const idSubsidio = req.params.idSubsidio;
  const comprasEncontradas = await Compras.findAll({
    include: [{ model: SubsidiosAsignados }],
  });
  let valor = 0.0;
  comprasEncontradas.forEach((compra) => {
    const subsidio = compra['SubsidiosAsignado'];
    if (subsidio['id'] == idSubsidio) {
      valor += parseInt(compra['monto']);
    }
  });
  res.json(valor);
};

// getTotalXRubro: devuelve un numero que es la suma de todas las compras
// del id del rubro, pasado por parametro
export const getTotalXRubro = async (req, res) => {
  const comprasEncontradas = {
    idSubsidio: parseInt(req.params.idSubsidio),
    idRubro: parseInt(req.params.idRubro),
  };
  res.json(comprasEncontradas); //
};
