import express from 'express';

import {
  getCompraByProyectId,
  getAllCompras,
  postCompra,
  getTotal,
  findByRubro,
  getTotalComprasXSubsidio,
} from '../controllers/compra_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/getComprasByProyect', withErrorHandling(getCompraByProyectId));
router.get('/', withErrorHandling(getAllCompras));
router.get('/gastos/totalGastos', withErrorHandling(getTotal));
router.get('/gastos/findByRubro', withErrorHandling(findByRubro));
router.post('/', withErrorHandling(postCompra));

// para probar ej.: http://localhost:3001/api/compras/getTotalxSubsidio/5
router.get('/getTotalxSubsidio/:idSubsidio', getTotalComprasXSubsidio);


export default router;
