'use strict';

const fs = require('fs');
const path = require('path');

// en lugar de usar readFile, podemos usar directamente require: nos lee el fichero y lo parsea si
// es un JSON... pero de forma síncrona!!
// const packageJSON = require('./node_modules/chance/package.json');

function versionModulo (nombreModulo, callback){

    const fichero = path.join('./node_modules', nombreModulo, 'package.json');

    // leemos contenido de un fichero package.json
    fs.readFile(fichero, 'utf-8', (err, data) => {
        if (err) {
            callback(err);
            return;
        }

        try {
            // parseamos el contenido del fichero convirtiendolo en un objeto (síncrono!!)
            // usamos 'var' para que haga hoisting (const y let no lo hacen) y así que sea visible
            // fuera del try/catch
            var packageJSON = JSON.parse(data);

        } catch (err) {
            callback(err);
            return;
        }

        // obtenemos la version (si no existe, tomará la opción alternativa -> || '')
        const version = packageJSON.version || '';

        // retornamos la version
        callback(null, version);

    });
}

module.exports = versionModulo;