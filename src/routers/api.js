const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const checks = require('../middleware/checks');
const checksLogin = require('../middleware/checksLogin');
const {validarCheck} = require('../middleware/validarChecks');
const {validarID} = require('../middleware/validarID')

router.get('/ver',apiController.verUsuarios);
router.post('/registrar' ,checks ,validarCheck ,apiController.register);
router.post('/login' ,checksLogin ,validarCheck ,apiController.loginToken);
router.put('/editar/:id',validarID ,checks ,validarCheck ,apiController.editarUnUsuario);
router.delete('/eliminar/:id',validarID, apiController.eliminarUsuario);


module.exports = router;