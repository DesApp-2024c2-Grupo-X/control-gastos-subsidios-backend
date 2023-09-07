import express from 'express';

import {
  getProyecto,
  getProyectoById,
  createProyecto,
  getAllProyectos,
  getProyectoByIdConCompra,
  getAllProyectosConCompras,
} from '../controllers/proyecto_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/findByName/:idProyecto', withErrorHandling(getProyectoById));

router.post('/create', withErrorHandling(createProyecto));
router.get('/findAll', withErrorHandling(getAllProyectos));
router.get('/findByIdConCompra', withErrorHandling(getProyectoByIdConCompra));
router.get('/findAllConCompra', withErrorHandling(getAllProyectosConCompras));

router.get('/:username', withErrorHandling(getProyecto));

export default router;
