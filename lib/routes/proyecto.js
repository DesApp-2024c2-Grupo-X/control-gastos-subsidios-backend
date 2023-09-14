import express from 'express';

import {
  getAllProyectos,
  getProyecto,
  getProyectoById,
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
router.get('/findById', withErrorHandling(getProyectoById));
router.get(
  '/findByName/:idProyecto',
  withErrorHandling(getProyectoByIdByParam)
);
router.post('/create', withErrorHandling(createProyecto));
router.get('/findAll', withErrorHandling(getAllProyectosConCompras));
router.get('/findByIdConCompra', withErrorHandling(getProyectoByIdConCompra));
router.get('/findAllConCompra', withErrorHandling(getAllProyectosConCompras));
router.get('/:username', withErrorHandling(getProyectoByParam));

export default router;
