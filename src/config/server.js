// Importar las librerías

const express = require("express");
const path = require("path");

const app = express(); // Inicializar el servidor

// Configurar el servidor
// Utilizar el puerto 3000 para conectarse, puede usar otro
app.set("port", process.env.PORT || 3000);
// Utilizar gestor de plantillas
app.set("view engine", "ejs");
// Indicarle al servidor que las vistas estaran alojadas en la carpeta app/views
app.set("views", path.join(__dirname, "../app/views"));

// Configuracion de middleware (intermediario para envio y recepcion de informacion)
app.use(express.urlencoded({ extended: false })); // solo manejar texto

module.exports = app; // Exportar el modulo configurado
