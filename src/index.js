import { heroes } from './data/heroes';



//const found = heroes.find(element => element.id > 3);


const  getHeroe = (id)=>{
   return heroes.find(element => element.id === id)
}


//console.log(found);

console.log(getHeroe(2));

