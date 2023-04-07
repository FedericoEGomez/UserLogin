const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const checks = require('../middleware/checks');
const checksEdit = require('../middleware/checksEdit');
const checksLogin = require('../middleware/checksLogin');
const {validarCheck} = require('../middleware/validarChecks');
const {validarID} = require('../middleware/validarID');
const validarJWT = require('../middleware/validarJWT')

router.get('/ver',apiController.verUsuarios);
router.post('/registrar' ,checks ,validarCheck ,apiController.register);
router.post('/login' ,checksLogin ,validarCheck ,apiController.loginToken);
router.put('/editar/:id',validarJWT,validarID,checksEdit ,validarCheck ,apiController.editarUnUsuario);
router.delete('/eliminar/:id',validarJWT ,validarID, apiController.eliminarUsuario);

module.exports = router;