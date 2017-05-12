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

async function main() {     // async delante de una función la hace asíncrona
    console.log('Empiezo...');
    
    // Nuestro catch también recoje los errores síncronos
    // throw new Error('trololo');

    await sleep(2000);      // El código se para aquí hasta que se completa la promesa

    for (let i = 0; i < 5; i++) {
        await sleep(1000);
        console.log('Pasó un segundo -', i);
    }

    console.log('Terminado.');
}

main()
    .then(() => {

    })
    .catch(err => {
        console.log('Hubo un error:', err);
    });