import express from 'express';
import compras from './compras';
import usuarios from './usuarios';
import proyectos from './proyectos';
import proveedores from './proveedores';
import convocatoria from './convocatoria'; // importa route de convocatoria
import Rubros from './rubros'; // importa route de rubros
import SubsidiosAsignados from './subsidiosAsignados'; // importa route de los subsidios

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/compras', compras);
router.use('/api/proyectos', proyectos);
router.use('/api/proveedores', proveedores);
router.use('/api/convocatoria', convocatoria); // publicacion en la API
router.use('/api/rubros', Rubros); // publicacion en la API
router.use('/api/subsidiosAsignados', SubsidiosAsignados); // publicacion en la API
export default router;
