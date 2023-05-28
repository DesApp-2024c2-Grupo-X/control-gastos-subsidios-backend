import express from 'express';
import { getAllSubsidiosAsignados } from '../controllers/subsidiosasignados_controller'

const router = express.Router();

// para poder probarlas, ej.: GET en http://localhost:3001/api/subsidiosAsignados/buscartodos
router.get('/buscartodos', getAllSubsidiosAsignados);

export default router;
