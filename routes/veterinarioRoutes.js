import express from 'express';
import { perfil, registrar,confirmar,autenticar, olvidePassword, comprobarToken, nuevoPassword, actualizarPerfil, actualizarPassword } from '../controllers/VeterinarioController.js';
import checkAuth from '../middleware/authMiddleware.js';

const router = express.Router();

// area publica
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar)
router.post('/olvide-password', olvidePassword)
router.get('/olvide-password/:token', comprobarToken)
router.post('/olvide-password/:token', nuevoPassword)
// area privada
router.get('/perfil',checkAuth, perfil);
router.put('/perfil/:id',checkAuth, actualizarPerfil);
router.put('/actualizar-password',checkAuth, actualizarPassword);

export default router;