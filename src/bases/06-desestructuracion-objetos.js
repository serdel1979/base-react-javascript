//Desestructuracion

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

console.log(persona.nombre);
console.log(persona.clave);
console.log(persona.edad);

const { nombre , edad, clave } = persona;

console.log(nombre);
console.log(clave);
console.log(edad);

//asignar en desestructuracion

const { nombre:otroNombre } = persona;

console.log('otro nombre ',otroNombre);

// const returnPersona = (usuario)=>{
//     //console.log(usuario);
//     const { nombre , edad, clave } = persona;
//     console.log(nombre,edad,clave);
// }

// returnPersona(persona);
// lo de abajo es equivalente

const context = ({nombre , edad, clave, otro = 'un valor por defecto'})=>{
   // console.log(nombre,edad,clave, otro);

   return {
       nombreClave: clave,
       anios: edad,
       latlng: {
           lat: 14.656565,
           lng: 14.5656565
       }
   }

}


// lo de abajo es equivalente
const avenger = context(persona);
const {nombreClave, anios, latlng:{lat, lng}} = avenger;
console.log(nombreClave, anios, lat, lng);