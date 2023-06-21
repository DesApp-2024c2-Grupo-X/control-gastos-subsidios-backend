import express from 'express';

import {
  getAllProyectos,
  getProyecto,
  getProyectoById,
  createProyecto,
} from '../controllers/proyecto_controller';

import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/allProyects', withErrorHandling(getAllProyectos));
router.get('/', withErrorHandling(getProyecto));
router.get('/findById', withErrorHandling(getProyectoById));
router.post('/create', withErrorHandling(createProyecto));

export default router;
