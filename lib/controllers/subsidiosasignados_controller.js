import Rubros from "../models/rubros";
import SubsidiosAsignados from "../models/subsidiosasignados";

// getAllSubsidiosAsignados: devuelve todos las rubros desde API/subsidiosasignados/buscartodos/
export const getAllSubsidiosAsignados = async (req, res) => {
    const subsidiosAsignadosEncontrados = await SubsidiosAsignados.findAll({
        attributes: ['id','idProyecto','idRubro','montoAsignado'], // aqui seleccionamos los atributos a mostrar por cada registro
        include: [{as: 'Rubro', model: Rubros, attributes:['nombre']}]
    });
    res.json({
      data: subsidiosAsignadosEncontrados.map((subsidio) => subsidio.toJSON()),
    });
  };