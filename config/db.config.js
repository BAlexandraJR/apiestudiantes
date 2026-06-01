const env = require('./env.js');
const Sequelize = require('sequelize');

class Database {
  constructor() {
    this.sequelize = new Sequelize(env.database, env.username, env.password, {
      host: env.host,
      dialect: env.dialect,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      },
      pool: {
        max: env.pool.max,      
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
      }
    });

    
    this.Sequelize = Sequelize;

    
    this.initModels();
  }

  initModels() {
    
    this.Juego = require('../models/estudiantes.model.js')(this.sequelize, this.Sequelize);
  }
}


module.exports = new Database();

db.Estudiante = require('../models/estudiante.model.js')(sequelize, Sequelize);