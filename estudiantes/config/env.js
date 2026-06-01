const env = {
    database: 'api-estudiantes ',
    username: 'api_estudiantes_user',
    password: 'ydcX4Fos6dWb2UgtlW4DQaH5xzwIFDW2',
    host: 'dpg-d8eh9pn40ujc73djjbjg-a.oregon-postgres.render.com',
    dialect: 'postgres',
    ssl: true,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
  module.exports = env;