import express from 'express';

import {
  getAllProyectos,
  getProyecto,
  getProyectoById,
  createProyecto,
  getAllProyecto,
} from '../controllers/proyecto_controller';

import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/allProyects', withErrorHandling(getAllProyecto));
router.get('/', withErrorHandling(getProyecto));
router.get('/findById', withErrorHandling(getProyectoById));
router.post('/create', withErrorHandling(createProyecto));

// para poder probarlas, ej.: GET en http://localhost:3001/api/proyectos/buscartodos
router.get('/buscartodos', getAllProyectos);

export default router;
