CREATE DATABASE empleados;

USE empleados;

CREATE TABLE operarios(
    id_elem INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    maquina TEXT,
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE operarios;

INSERT INTO operarios(nombre, maquina) values ("Juan", "Torno");
INSERT INTO operarios(nombre, maquina) values ("Pedro", "Maquina Soldadura");

SELECT * FROM operarios;