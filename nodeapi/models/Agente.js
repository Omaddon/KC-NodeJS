'use strict';

const mongoose = require('mongoose');

// Primero definimos un Schema
const agenteSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: {
        type: String,
        index: true,
        unique: true
    }
});

// Creamos un método estático para nuestro modelo de Agente
agenteSchema.statics.list = function(filter, limit, skip, fields, sort, callback) {
    // Podemos acceder a Agente gracias al Hoisting
    const query = Agente.find(filter);
    query.limit(limit);
    query.skip(skip);
    query.select(fields);   // fields es del tipo { nombreCampo: 1, nombreCampoQueNoQuiero:0 }
    query.sort(sort);
    
    query.exec(callback);
};

// Luego creamos el modelo
var Agente = mongoose.model('Agente', agenteSchema);

// Realmente no es necesario exportarlo, ya que en otros sitios
// podríamos recuperar el modelo usando:
// mongoose.model('Agente');
module.exports = Agente;