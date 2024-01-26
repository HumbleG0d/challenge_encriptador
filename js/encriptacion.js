import { llaves } from "./llaves.js"

export function encriptacion(mensaje) {
 const array_letras = mensaje.split("");
 let new_mensaje = " ";
 array_letras.forEach(element => {
    if(element in llaves){
        new_mensaje += llaves[element];
    }else{
        new_mensaje += element;
    }
 });

 return new_mensaje;
}
