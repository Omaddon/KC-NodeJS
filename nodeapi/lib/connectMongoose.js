'use strict';

const mongoose = require('mongoose');
const conn = mongoose.connection;

// Le decimos a mongoose que librería de promesas vamos a usar
mongoose.Promise = global.Promise;

// Si hay error al hacer la conexión (mongoose.connect)
conn.on('error', (err) => {
    console.log('Error de conexión', err);
    process.exit(1);
});

conn.once('open', () => {
    console.log('Conectado a MongoDB.');
});

// dirección + puerto (27017) + /nombre db
mongoose.connect('mongodb://localhost/cursonode');

// NO es necesario exportar nada de este módulo, ya que mongoose 
// se guarda la conexión internamente