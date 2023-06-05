import express from 'express';
import {
  getAllRubros,
  getIdRubro,
  getRubros,
} from '../controllers/rubros_controller';

const router = express.Router();

// para poder probarlas, ej.: GET en http://localhost:3001/api/rubros/buscarid/3
router.get('/buscarid/:id', getIdRubro);
// para poder probarlas, ej.: GET en http://localhost:3001/api/rubros/buscartodos
router.get('/buscartodos', getAllRubros);
// para poder probarlas, ej.: GET en http://localhost:3001/api/rubros/listadetodos
router.get('/listadetodos', getRubros);

export default router;
