'use estrict';

// Creamos unas funciones que devuelven promesas
function conArroz(plato) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' arroz');
    });
}

function conAjo(plato) {
    return new Promise((resolve, reject) => {
        // resolve(plato + ' ajo');
        reject('fatal');
    });
}

function con(plato, ingrediente) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' ' + ingrediente);
    });
}

// Encadenamos las promesas
const paella = 'Paella con';

conArroz(paella)
    .then((plato) => {
        console.log(plato);
        return plato;
    })
    .then(conAjo)  // conAjo recibe el plato que devolvió conArroz (cuando se cumpla la promesa)
    .then((plato) => {
        return con(plato, 'sal');   // Devolvemos la promesa de 'con' para que sea lo que devuelve el .then
    })
    .then((plato) => {
        console.log(plato);
    })
    .catch((err) => {
        // Si se produce un solo reject en la cadena de promesas, se saltará al primer catch
        // Puede haber varios catch y no tienen porqué estar al final. La ejecución continuará
        // con el siguiente .then tras el catch
        console.log('Hubo un error', err); 
    });