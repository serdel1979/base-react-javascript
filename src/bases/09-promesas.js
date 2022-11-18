import { getHeroe } from './bases/08-imports-exports-funciones';


// const promesa = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//       const heroe = getHeroe(2);
//       resolve(heroe);
//       //reject('Hubo error');
//    },2000)
// });

// promesa.then((heroe)=>{
//    console.log("resultado de la promesa ",heroe);
// })
// .catch(err=>console.warn(err));

const getHeroeByIdAsync = (id)=>{
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       const heroe = getHeroe(id);
       if(heroe){
         resolve(heroe);
       }else{
         reject('No encontrado');
       }
    },2000)
 });
}

getHeroeByIdAsync(2)
.then(console.log)
.catch(console.warn);