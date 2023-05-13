import express from 'express';
import {
  getIdConvocatoria,
  getAllConvocatoria,
} from '../controllers/convocatoria_controller';

const router = express.Router();

// para poder probarlas, ej.: GET en http://localhost:3001/api/convocatoria/buscarid/3
router.get('/buscarid/:id', getIdConvocatoria);
// para poder probarlas, ej.: GET en http://localhost:3001/api/convocatoria/buscartodas
router.get('/buscartodas', getAllConvocatoria);

export default router;
