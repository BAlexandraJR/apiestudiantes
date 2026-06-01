let express = require('express');
let router = express.Router();
 

const estudiantes = require('../controllers/juego.controller.js');


router.post('/api/estudiantes/create', estudiantes.create);
router.get('/api/estudiantes/onebyid/:id', estudiantes.getEstudianteById);
router.put('/api/estudiantes/update/:id', estudiantes.updateById);
router.delete('/api/estudiantes/delete/:id', estudiantes.deleteById);

module.exports = router;