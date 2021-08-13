const options = { // Opciones en yargs 'command('nombre_del_comando', 'descripción_del_comando', {parámetro: {opciones: ...}})'
    base: { // Nombre del parámetro del comando 'listar' y 'crear' en este caso 'base' (en consola se escribe --base)
        demand: true, // Permite declarar el comando '--base' como requerido o no, en este caso es requerido
        alias: 'b' // Alias del comando base (en este caso es lo mismo --base que -b)
    },
    limite: { // Declaración del parámetro --limite
        alias: 'l', // Alias de --limite sería -l
        default: 10 // Valor por defecto de --limite (en este caso si no se declara su valor tomará por defecto el valor de 10)
    }
};

const argv = require('yargs') // Yargs es un paquete de Node muy útil para escribir comandos en consola
    .command('listar', 'Imprime en consola la tabla de multiplicar', options) // Con command se declaran los comandos y sus opciones en yargs 'command('nombre_del_comando', 'descripción_del_comando', {parámetro1: {opciones1: ...}, parámetro2: {opciones2: ...}})'
    .command('crear', 'Crea un archivo con la tabla de multiplicar', options)
    .help() // Muestra la ayuda de cada comando --help
    .argv;

module.exports = { argv };