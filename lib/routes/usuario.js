import express from 'express';
const multer = require('multer');
const fs = require('fs');
const path = require('path');

import {
  index,
  searchUser,
  postUsuario,
  searchUserByParam,
} from '../controllers/usuario_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const { id } = req.params;
    cb(null, 'compra' + '-' + id + '.pdf');
  },
});

const upload = multer({ storage });

const downloadPDF = async (req, res) => {
  const { id } = req.params;
  const ruta = __dirname.split('dist');
  const pdfFolderPath = path.join(ruta[0], '/uploads');
  const filename = 'compra-' + id + '.pdf';
  const pdfPath = path.join(pdfFolderPath, filename);

  // Verifica si el archivo existe
  if (fs.existsSync(pdfPath)) {
    const stat = fs.statSync(pdfPath);
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename=${filename}`);

    const readStream = fs.createReadStream(pdfPath);
    readStream.pipe(res);
  } else {
    // Si el archivo no existe, devuelve un código de estado 404
    res.status(404).send('Archivo no encontrado');
  }
};

router.get('/', withErrorHandling(index));
router.post('/searchUser', withErrorHandling(searchUser));
router.get('/searchUser/:username', withErrorHandling(searchUserByParam));
router.post('/newUser', withErrorHandling(postUsuario));

router.post('/upload/:id', upload.single('pdf'), (req, res) => {
  res.json({ message: 'Archivo subido con éxito' });
});

router.get('/download/:id', withErrorHandling(downloadPDF));

export default router;
