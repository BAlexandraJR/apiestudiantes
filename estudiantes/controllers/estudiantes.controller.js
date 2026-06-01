const db = require('../config/db.config.js');
const Estudiante = db.Estudiante; 


exports.create = (req, res) => {
    let estudiante = {};

    try {
        estudiante.carne = req.body.carne;
        estudiante.nombre = req.body.nombre;
        estudiante.apellido = req.body.apellido;
        estudiante.carrera = req.body.carrera;
        estudiante.correo = req.body.correo;
        estudiante.telefono = req.body.telefono;
        estudiante.fecha_ingreso = req.body.fecha_ingreso;
        estudiante.estado = req.body.estado;
        estudiante.comentario = req.body.comentario;

        Estudiante.create(estudiante).then(result => {
            res.status(200).json({
                message: "Estudiante creado exitosamente con id = " + result.id_estudiante,
                estudiante: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Fallo al crear el estudiante!",
            error: error.message
        });
    }
};


exports.getEstudianteById = (req, res) => {
    let estudianteId = req.params.id;
    Estudiante.findByPk(estudianteId)
        .then(estudiante => {
            if (!estudiante) {
                return res.status(404).json({
                    message: "No se encontró el estudiante con id = " + estudianteId,
                    error: "404"
                });
            }
            res.status(200).json({
                message: "Estudiante obtenido exitosamente con id = " + estudianteId,
                estudiante: estudiante
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "¡Error al obtener estudiante con id!",
                error: error.message
            });
        });
};


exports.updateById = async (req, res) => {
    try {
        let estudianteId = req.params.id;
        let estudiante = await Estudiante.findByPk(estudianteId);
    
        if (!estudiante) {
            res.status(404).json({
                message: "No se encontró el estudiante para actualizar con id = " + estudianteId,
                estudiante: "",
                error: "404"
            });
        } else {    
            let updatedObject = {
                carne: req.body.carne,
                nombre: req.body.nombre,
                apellido: req.body.apellido,  
                carrera: req.body.carrera,
                correo: req.body.correo,
                telefono: req.body.telefono,
                fecha_ingreso: req.body.fecha_ingreso,
                estado: req.body.estado,
                comentario: req.body.comentario
            }
            
            let result = await Estudiante.update(updatedObject, { returning: true, where: { id_estudiante: estudianteId } });
            
            if (!result[0] && result[0] !== undefined) { 
                return res.status(500).json({
                    message: "No se puede actualizar el estudiante con id = " + req.params.id,
                    error: "No se pudo actualizar el registro",
                });
            }

            res.status(200).json({
                message: "Actualización exitosa del estudiante con id = " + estudianteId,
                estudiante: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "No se puede actualizar el estudiante con id = " + req.params.id,
            error: error.message
        });
    }
};


exports.deleteById = async (req, res) => {
    try {
        let estudianteId = req.params.id;
        let estudiante = await Estudiante.findByPk(estudianteId);

        if (!estudiante) {
            res.status(404).json({
                message: "No existe el estudiante con id = " + estudianteId,
                error: "404",
            });
        } else {
            await estudiante.destroy();
            res.status(200).json({
                message: "Eliminación exitosa del estudiante con id = " + estudianteId,
                estudiante: estudiante,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "No se puede eliminar el estudiante con id = " + req.params.id,
            error: error.message,
        });
    }
}