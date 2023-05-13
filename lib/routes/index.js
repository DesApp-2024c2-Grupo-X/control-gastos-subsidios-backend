import express from 'express';
import compras from './compras';
import usuarios from './usuarios';
import proyectos from './proyectos';
import proveedores from './proveedores';
import convocatoria from './convocatoria'; // importa route de convocatoria

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/compras', compras);
router.use('/api/proyectos', proyectos);
router.use('/api/proveedores', proveedores);
router.use('/api/convocatoria', convocatoria); // publicacion en la API
export default router;
