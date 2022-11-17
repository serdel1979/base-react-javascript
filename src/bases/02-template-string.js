
const nombre ='Sergio';
const apellido = 'De Luca';


let fullName = `${nombre}
${apellido}
${1*5}`;

console.log(fullName);

function getSaludo(nombre){
    return `Hola ${nombre}`;
}

console.log(`Esto es un texto:: ${getSaludo(fullName)}`);