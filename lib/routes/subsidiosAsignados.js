import express from 'express';
import { getAllSubsidiosAsignados, getTotalSubsidios, getSubsidios } from '../controllers/subsidiosasignados_controller'

const router = express.Router();

// para poder probarlas, ej.: GET en http://localhost:3001/api/subsidiosAsignados/buscartodos
router.get('/buscartodos', getAllSubsidiosAsignados);

// para probarla ej.: GET en http://localhost:3001/api/subsidiosAsignados/totalsubsidiosdelproyecto/1
router.get('/totalsubsidiosdelproyecto/:id', getTotalSubsidios);

// para probarla ej.: GET en http://localhost:3001/api/subsidiosAsignados/subsidiosdelproyecto/1
router.get('/subsidiosdelproyecto/:id', getSubsidios);

export default router;
