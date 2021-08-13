const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';

        for (i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`
        }
        resolve(data);
    });
};


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`
        }

        fs.writeFile(`tablas/${base}.txt`, data, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve(`${base}.txt`);
            }
        });
    })
};

module.exports = { crearArchivo, listarTabla };