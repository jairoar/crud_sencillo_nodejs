// Importar los modulos que creamos
const app = require("./config/server.js");
const routes = require("./app/routes/navigation.js");

routes(app); // Asignarle las rutas que creamos en navigation.js a la app que creamos en server.js

// Ejecutar el servidor
app.listen(app.get("port"), () => {
  console.log("Servidor en el puerto: ", app.get("port"));
});
