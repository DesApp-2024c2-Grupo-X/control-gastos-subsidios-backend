import express from 'express';

import {
  getCompraByProyectId,
  getAllCompras,
  postCompra,
  getTotal,
  findByRubro,
  getTotalComprasXSubsidio,
  getTotalXRubro,
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

// para probar ej.: http://localhost:3001/api/compras/xproyectoxrubro/1/3
router.get('/xproyectoxrubro/:idSubsidio/:idRubro', getTotalXRubro);

export default router;
