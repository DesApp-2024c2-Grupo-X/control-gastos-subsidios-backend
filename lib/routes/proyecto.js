import express from 'express';

import {
  getAllProyectos,
  getProyecto,
  createProyecto,
  getProyectoByIdConCompra,
  getAllProyectosConCompras,
  getProyectoByParam,
  getProyectoByIdByParam,
} from '../controllers/proyecto_controller';

import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/allProyects', withErrorHandling(getAllProyectos));
router.get('/', withErrorHandling(getProyecto));

router.get('/findById/:idProyecto', withErrorHandling(getProyectoByIdByParam));
router.post('/create', withErrorHandling(createProyecto));
router.get('/findAll', withErrorHandling(getAllProyectos));
router.get('/findByIdConCompra', withErrorHandling(getProyectoByIdConCompra));
router.get('/findAllConCompra', withErrorHandling(getAllProyectosConCompras));
router.get('/:username', withErrorHandling(getProyectoByParam));

export default router;
