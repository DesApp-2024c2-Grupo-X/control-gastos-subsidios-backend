import Compras from '../models/compras';

export const getCompraByProyectId = async (req, res) => {
  const idProyecto = req.body.idProyecto;
  const compras = await Compras.findAll({});
  const comprasById = compras.filter(
    (compra) => compra.idProyecto == idProyecto
  );
  res.json(comprasById);
};

export const getAllCompras = async (req, res) => {
  const compras = await Compras.findAll({});
  res.json(compras.map((compra) => compra.toJSON()));
};

export const postCompra = (req, res) => {
  //INSERT ROW

  Compras.create({
    fecha: req.body.fecha,
    rubro: req.body.rubro,
    subrubro: req.body.subrubro,
    numeroCompra: req.body.numeroCompra,
    proveedor: req.body.proveedor,
    monto: req.body.monto,
    estado: req.body.estado,
    factura: req.body.factura,
    nombre: req.body.nombre,
    idProyecto: req.body.idProyecto,
  })
    .then((compra) => res.status(201).send({ nombre: compra.nombre }))
    .catch((error) => {
      if (error.message) {
        res.status(404).send('Bad request');
      } else {
        res.status(500).send({
          message: 'Serivice error',
          errorType: error.name,
          errorImage: 'https://http.cat/500',
        });
      }
    });
};

export const getTotal = async (req, res) => {
  const gastosTotales = await Compras.sum('monto');
  res.json({ totalGastos: gastosTotales });
};

export const findByRubro = async (req, res) => {
  const compras = await Compras.findAll();
  const comprasByProyecto = compras.filter(
    (compra) => compra.idProyecto == req.query.idProyecto
  );
  const filterComprasByRubro = comprasByProyecto.filter(
    (compra) => compra.rubro.toLowerCase() === req.query.rubro.toLowerCase()
  );
  let total = 0;
  filterComprasByRubro.map((compra) => (total += parseInt(compra.monto)));
  res.json({ rubro: req.query.rubro, totalGastado: total });
};

//getComprasXSubsidio: devuelve el total sumando todas las compras, que corresponden
//a un subsidio.
export const getTotalComprasXSubsidio = async (req, res) => {
  const comprasEncontradas = await Compras.findAll({
    where: { idsubsidio: req.params.idSubsidio },
  });
  //var total = 0.0
  //comprasEncontradas.forEach(compra => total = parseFloat(compra.monto) + total )
  //res.json(total); // esta tardo 4.092 ms
  const valorInicial = 0.0;
  const totalCompras = comprasEncontradas.reduce(
    (acumulador, compra) => acumulador + parseFloat(compra.monto),
    valorInicial
  );
  res.json(totalCompras); // esta tardo 10.054 ms
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
