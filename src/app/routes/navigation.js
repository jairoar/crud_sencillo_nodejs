// Archivo de conexion a base de datos
const dbConnection = require("../../config/dbConnection.js");

// Rutas para acceder al servidor
// Funcion que recibe un servidor como parametro y le asigna rutas de acceso

routes = (app) => {
  // Conectarse a la base de datos
  const connection = dbConnection();
  app.get("/", (req, res) => {
    connection.query("SELECT * FROM operarios", (err, result) => {
      res.render("../views/landing.ejs", {
        operarios: result,
      });
    });
  });
  // Crear entradas en la BD
  app.post("/create", (req, res) => {
    const { nombre, maquina } = req.body; // Asignar las variables que vienen en el objeto ya conocido
    // Consulta de creacion de entrada en la BD
    connection.query(
      "INSERT INTO operarios SET?",
      { nombre: nombre, maquina: maquina }, // Enviar los datos a la tabla operarios a los campos nombre y maquina
      (err, result) => {
        if (err) {
          // Si hay un error imprimirlo de lo contrario actualizar la pagina
          res.send(err);
        } else {
          res.redirect("/");
        }
      }
    );
  });
  // Eliminar entradas de la BD, esta conectado al boton en la tabla
  app.get("/delete/:id", (req, res) => {
    const id = req.params.id; // Propiedad de express para jalar el dato que este en la posicion :id
    connection.query(
      "DELETE FROM operarios WHERE id_elem = ?", // Eliminar de la tabla operarios el id que jala del frontend
      [id],
      (err, result) => {
        if (err) {
          res.status(500).send(err); // Si hay un error enviar un codigo http 500 e imprimir el error en pantalla (buenas practicas)
        } else {
          res.redirect("/"); // Actualizar la pagina al eliminar la entrada
        }
      }
    );
  });
  // Renderizar la página de edición de entradas de la base de datos
  app.get("/edit/:id", (req, res) => {
    const id = req.params.id; // obtener el id desde el frontend
    connection.query(
      "SELECT * FROM operarios WHERE id_elem = ?", // query para traer los datos del id
      [id],
      (err, result) => {
        if (err) {
          res.send(err); // mostrar mensaje de error en caso de que falle algo
        } else {
          res.render("../views/editar.ejs", {
            // renderizar la pagina y enviar el objeto resultante de la consulta
            operario_editable: result,
          });
        }
      }
    );
  });
  // Actualizar la entrada en la base de datos
  app.post("/edit/:id", (req, res) => {
    const id = req.params.id; // obtener el id que mapeamos desde el frontend
    const { nombre, maquina } = req.body; // guardar los datos del envio con sus nombres respectivos
    connection.query(
      "UPDATE operarios SET nombre = ?, maquina = ? WHERE id_elem = ?",
      [nombre, maquina, id],
      (err, result) => {
        if (err) {
          res.send(err); // si hay error mostrar el error
        } else {
          res.redirect("/"); // si el query sale bien, actualizar y redirigir a la pagina principal para ver la tabla
        }
      }
    );
  });
};

module.exports = routes; // exportar el servidor con las rutas configuradas
