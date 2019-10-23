
const opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default: 10
  }
}


const argv = require('yargs')
  .command('crear', 'Crea txt y almacena tabla', opts)
  .command('listar', 'Imprime en consola la tabla', opts) 
  .help()
  .argv;

  module.exports = {
    argv
  }