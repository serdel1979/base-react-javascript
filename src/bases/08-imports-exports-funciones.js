//import heroes,{ owners } from '../data/heroes'; //sin llaves es importacion por defecto
import heroes from '../data/heroes'; //sin llaves es importacion por defecto



//const found = heroes.find(element => element.id > 3);


// const  getHeroe = (id)=>{
//    return heroes.find(element => element.id === id)
// }

//es equivalente al de arriba
 export const  getHeroe = (id) => heroes.find(element => element.id === id)
 



//console.log(found);

// console.log(getHeroe(3));

// console.log('existe el de id 2?',existeHeroe(2));

export const  getHeroeByOwner = (owner) => heroes.filter(element => element.owner.toLowerCase() === owner.toLowerCase())
 
// console.log('por owner ',getHeroeByOwner('dc'));

// console.log(owners);