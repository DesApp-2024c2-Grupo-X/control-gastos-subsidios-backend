import express from 'express';

import {
  index,
  searchUser,
  postUsuario,
  searchUserByParam,
  setUserProyectoActual,
} from '../controllers/usuario_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(index));
router.post('/searchUser', withErrorHandling(searchUser));
router.get('/searchUser/:username', withErrorHandling(searchUserByParam));
router.post('/newUser', withErrorHandling(postUsuario));
router.put('/setUserProject', withErrorHandling(setUserProyectoActual));

export default router;
