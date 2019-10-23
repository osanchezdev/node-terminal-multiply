const { argv } = require('./config/yargs')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const colors = require('colors');

// Args por defecto process node
// console.log(process.argv)
// let argv2 = process.argv;
// let param = argv[2];
// let base = param.split('=')[1];

// console.log(argv);
// console.log('base:',argv.base);
// console.log('limite:',argv.limite);

let comando= argv._[0];

console.log(argv);

switch (comando) {
  case 'listar':
      listarTabla(argv.b, argv.l)
        .then(data => console.log(data.green))
        .catch(err => console.log(err.red))
    break;
  case 'crear':
      crearArchivo(argv.b, argv.l)
        .then(archivo => console.log(`Archivo creado: ${ archivo }`.bgGreen.white))
        .catch(err => console.log(err.red))
    break;
  default:
    console.log('Comando no reconocido')
    break;
}
// console.log(argv2);

