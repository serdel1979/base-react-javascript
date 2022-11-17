//Funciones

// const saludar = function (nombre){
//     return `Hola, ${nombre}`
// }

// const saludar2 = (nombre)=>{
//     return `Hola, ${nombre}`
// }

//es equivalente
const saludar2 = (nombre)=>`Hola ${nombre}`;

const fun = ()=>`Hola ...`;

const getUser = ()=>{
    return {
        uid: 'ABC',
        USERNAME: 'eL_PIPO'
    }
}

const getUsuarioActivo = (user)=>({
    uid: 'ABC654',
    username: user
})

console.log(saludar2('pepe'));

console.log(fun());

console.log(getUser());

console.log(getUsuarioActivo('papo'));