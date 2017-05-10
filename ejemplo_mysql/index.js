'use strict';

// Cargamos el driver de mysql
const mysql = require('mysql');

// Creamos una conexión (a una base de datos de un amigo del instructor)
const connection = mysql.createConnection({
    host: 'didimo.es',
    user: 'usuariocurso',
    password: 'us3r',
    database: 'cursonode'
});

// Establecemos la conexión que hemos creado
connection.connect();

// Lanzamos una consulta a la bd
connection.query('SELECT * FROM agentes', (err, rows, fields) => {
    if (err) {
        console.log('Error:', err);
        process.exit(1);
        // o return;
    }

    for (let i = 0; i < rows.length; i++) {
        const agente = rows[i];
        console.log(agente.idagentes, agente.name, agente.age);
    }
    connection.end();
});