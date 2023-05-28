import express from 'express';

import {
  getCompraByProyectId,
  getAllCompras,
  postCompra,
  getTotal,
  findByRubro,
} from '../controllers/compra_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/getComprasByProyect', withErrorHandling(getCompraByProyectId));
router.get('/', withErrorHandling(getAllCompras));
router.get('/gastos/totalGastos', withErrorHandling(getTotal));
router.get('/gastos/findByRubro', withErrorHandling(findByRubro));
router.post('/', withErrorHandling(postCompra));

export default router;
