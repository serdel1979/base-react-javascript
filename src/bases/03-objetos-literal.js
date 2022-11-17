
const persona = {
    nombre: 'Enzo',
    apellido: 'Perez',
    edad: 45,
    direccion: {
        ciudad: 'Berisso',
        zip: 465465444,
        lat: 14.654654,
        lng: 21.121321
    }
};

console.log({persona});

//console.table({persona});

const person2 = persona;

console.log(person2);

persona.apellido = 'Zambrano';

console.log(person2);

// se asigna la referencia
// para clonar un objeto...

const persona2 = { ...persona};

console.log(persona2);

persona.apellido = 'Loco';

console.log(persona2);