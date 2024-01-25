import { llaves } from "./llaves.js"

export function encriptacion(mensage) {
 const array_letras = mensage.split("");
 let new_mensage = " ";
 array_letras.forEach(element => {
    if(element in llaves){
        new_mensage += llaves[element];
    }else{
        new_mensage += element;
    }
 });

 return new_mensage;
}
