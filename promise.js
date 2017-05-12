'use strict';

// Función que retorna una promesa
function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            //reject('Error fatal!!');
        }, ms);
    });
}

console.log('Empiezo...');

const promesa = sleep(2000);

// Cuando se haya cumplido la promesa (es decir, en nuestro caso 
// tras 2 segundos) se ejecuta la función y si se produce un error (reject)
// pasará al catch
promesa.then(() => {
    console.log('Termino');
}).catch((err) => {
    console.log('Hubo un error:', err);
});