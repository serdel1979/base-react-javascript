//desestructuracion de arreglos

const personajes = ['Goku','Vegeta','Trunks'];

console.log(personajes);

const [ p1, p2 ] = personajes;


console.log( p1 );
console.log( p2 );

//quiero el segundo elemento

const [ ,, pos3 ] = personajes;
console.log(pos3);

const retornaArreglo = ()=>{
    return ['ABC',123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras,numeros);

const state = (valor)=>{
    return [valor, ()=>{console.log(`Hola ${valor}`)}];
}

const arr = state('goku');
console.log(arr);

arr[1]();  //<--- ejecuta la funcion referenciada en el arreglo devuelto

//entonces

const [nombre, funcion]= state('Pity');

console.log(nombre);
funcion();



