var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const segundo = (new Date()).getSeconds();

  res.render('index', { 
    title: 'Express',
    valor: '<script>alert("cuidado!")</script>',
    condicion: {
      segundo: segundo,
      estado: segundo % 2 === 0
    },
    users: [
      { name: 'Smith', age: 42},
      { name: 'Thomas', age: 32},
      { name: 'Jones', age: 25}
    ]
  });
});

/*
    '/param/:id?'                   => parámetro opcional
    '/param/:id([0-9]+)'            => parámetro con regexp
    '/param/:id'([0-9]+)/:piso(A|B) => varios params
*/
router.get('/paramruta/:id', (req, res, next) => {
  console.log('req.params', req.params);
  res.send('Ok. Parámetro recibido: ' + req.params.id);
});

// uno o más dígitos de 0-9
// OJO! NO es case sensitive
router.get('/param/:id([0-9]+)/piso/:piso/puerta/:puerta(A|B|C)', (req, res, next) => {
  console.log('Varios params', req.params);
  res.send('ok');
});

router.get('/paramopcional/:dato?', (req, res, next) => {
  console.log('Parámetro opcional:', req.params);
  res.send('ok');
});

// se pueden anidar filtros en la ruta (en el browser) mediante &
router.get('/enquerystring', (req, res, next) => {
  console.log('req.query', req.query);
  res.send('ok');
});

// --------------------------- GET (body) ---------------------------
router.put('/enelbody', (req, res, next) => {
  // req.body para acceder al body de la petición
  // req o res, .get o .set (req.get) para acceder a la cabecera de la petición
  console.log('req.body', req.body);
  res.send('ok en el body');
});

/*        MÉTODOS DE RESPUESTA

  res.download()
  res.end()
  res.json()
  res.jsonp()
  res.redirect()
  res.render()
  res.send()
  res.sendFile
  res.sendStatus()
*/


module.exports = router;
