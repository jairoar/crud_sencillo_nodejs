// Módulo base de datos
const mysql = require("mysql");

// Retornar una conexion a BD para usarla donde sea
// host: localhost
// user: root
// sin password (si tiene debe ponerla)
// Conectarse a la BD empleados
connection = () => {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "empleados",
  });
};

// exportar la conexion para usarla en cualquier lugar
module.exports = connection;
