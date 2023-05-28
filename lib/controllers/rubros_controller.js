import Rubros from "../models/rubros";

// getAllRubros: devuelve todos las rubros desde API/rubros/buscartodas/
export const getAllRubros = async (req, res) => {
  const rubrosEncontrados = await Rubros.findAll({});
  res.json({
    data: rubrosEncontrados.map((rubro) => rubro.toJSON()),
  });
};

// getIdRubro: busca mediante Id, desde la API/rubros/buscarid/:id
export const getIdRubro = async (req, res) => {
    const rubroEncontrado = await Rubros.findOne({
      where: { id: req.params.id },
    });
    res.json(rubroEncontrado);
  };