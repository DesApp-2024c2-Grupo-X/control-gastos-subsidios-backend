import Rubros from "../models/rubros";
import SubsidiosAsignados from "../models/subsidiosasignados";

// getAllSubsidiosAsignados: devuelve todos las rubros desde API/subsidiosasignados/buscartodos/
export const getAllSubsidiosAsignados = async (req, res) => {
    const subsidiosAsignadosEncontrados = await SubsidiosAsignados.findAll({
        attributes: ['id','idProyecto','idRubro','montoAsignado'], // aqui seleccionamos los atributos a mostrar por cada registro
        //include: [{as: 'Rubro', model: Rubros, attributes:['nombre']}]
    });
    res.json({
      data: subsidiosAsignadosEncontrados.map((subsidio) => subsidio.toJSON()),
    });
  };

// getTotalSubsidios: busca mediante Id, desde la API/subsidiosasignados/totalsubsidiosdelproyecto/:id
export const getTotalSubsidios = async (req, res) => {
  const subsidiosEncontrados = await SubsidiosAsignados.findAll({
    where: { idProyecto: req.params.id }, //filtra los subsidios x el id del proyecto pasado
    attributes: ['montoAsignado'], // solo trae el monto asignado de los subsidios
  });
  const total = await subsidiosEncontrados.sum('montoAsignado')
  res.json(total);
};  

// getTotalSubsidios: busca mediante Id, desde la API/subsidiosasignados/subsidiosdelproyecto/:id
export const getSubsidios = async (req, res) => {
  const subsidiosEncontrados = await SubsidiosAsignados.findAll({
    where: { idProyecto: req.params.id }, //filtra los subsidios x el id del proyecto pasado
    attributes: ['idRubro','montoAsignado'], // solo trae el rubro y monto asignado de los subsidios
  });
  res.json(subsidiosEncontrados);
}; 