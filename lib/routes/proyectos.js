import express from 'express';

import {
  getProyecto,
  getProyectoById,
  createProyecto,
  getAllProyecto,
} from '../controllers/proyecto_controller';

import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/', withErrorHandling(getProyecto));
router.post('/findByName', withErrorHandling(getProyectoById));
router.post('/create', withErrorHandling(createProyecto));

// para poder probarlas, ej.: GET en http://localhost:3001/api/proyectos/buscartodos
router.get('/buscartodos', getAllProyecto);

export default router;
