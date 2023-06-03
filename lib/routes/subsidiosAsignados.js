import express from 'express';
import { getAllSubsidiosAsignados,getIdSubsidio ,getTotalSubsidios, getSubsidios, getSubsidiosXproyectoXrubro, postSubsidios } from '../controllers/subsidiosasignados_controller'

const router = express.Router();

// para poder probarlas, ej.: GET en http://localhost:3001/api/subsidiosAsignados/buscartodos
router.get('/buscartodos', getAllSubsidiosAsignados);

// para poder probarlas, ej.: GET en http://localhost:3001/api/subsidiosAsignados/buscarpor/4
router.get('/buscarpor/:id', getIdSubsidio);

// para probarla ej.: GET en http://localhost:3001/api/subsidiosAsignados/totaldelproyecto/1
router.get('/totaldelproyecto/:id', getTotalSubsidios);

// para probarla ej.: GET en http://localhost:3001/api/subsidiosAsignados/delproyecto/1
router.get('/delproyecto/:id', getSubsidios);

// para probar ej.: http://localhost:3001/api/subsidiosAsignados/xproyectoxrubro/1/3
router.get('/xproyectoxrubro/:idProyecto/:idRubro', getSubsidiosXproyectoXrubro);

// para probar ej.: http://localhost:3001/api/subsidiosAsignados/postSubsidio/1/4/5400
router.post('/postSubsidio/:idProyecto/:idRubro/:montoAsignado', postSubsidios);

export default router;
