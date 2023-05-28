import express from 'express';
import compras from './compra';
import usuarios from './usuario';
import proyectos from './proyecto';
import proveedores from './proveedores';
import convocatorias from './convocatoria';

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/compras', compras);
router.use('/api/proyectos', proyectos);
router.use('/api/proveedores', proveedores);
router.use('/api/convocatorias', convocatorias);

export default router;
