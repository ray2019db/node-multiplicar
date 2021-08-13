const argv = require('./config/yargs').argv;

const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0]; // Posición [0] del arreglo '_' en el objeto 'argv'

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => {
                console.log(`Table del ${argv.base}`.green);
                console.log(data)
            })
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(resp => {
                console.log(`El Archivo ${resp.green} a sido creado con exito`);
            }).catch(err => {
                console.log(err);
            })
        break;
    default:
        console.log('Comando no reconocido');
}