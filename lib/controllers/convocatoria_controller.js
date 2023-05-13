import Convocatoria from '../models/convocatoria';

// getIdConvocatoria: busca mediante Id, desde la API/convocatoria/buscarid/:id
export const getIdConvocatoria = async (req, res) => {
  const convocatoriaEncontrada = await Convocatoria.findOne({
    where: { id: req.params.id },
  });
  res.json(convocatoriaEncontrada);
};

// getAllConvocatoria: devuelve todas las convotatorias desde API/convocatoria/buscartodas/
export const getAllConvocatoria = async (req, res) => {
  const convocatoriasEncontradas = await Convocatoria.findAll({});
  res.json({
    data: convocatoriasEncontradas.map((convocatoria) => convocatoria.toJSON()),
  });
};
