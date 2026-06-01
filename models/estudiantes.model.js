module.exports = (sequelize, Sequelize) => {
    const Estudiante = sequelize.define("Estudiantes", {
        id_estudiante: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        carne: {
            type: Sequelize.STRING
        },
        nombre: {
            type: Sequelize.STRING
        },
        apellido: {
            type: Sequelize.STRING
        },
        carrera: {
            type: Sequelize.STRING
        },
        correo: {
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.STRING
        },
        fecha_ingreso: {
            type: Sequelize.DATE
        },
        estado: {
            type: Sequelize.BOOLEAN 
        },
        comentario: {
            type: Sequelize.TEXT
        }
    });

    return Estudiante;
};