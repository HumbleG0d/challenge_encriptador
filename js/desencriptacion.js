import { llaves } from "./llaves.js";

export function desencriptacion(mensaje){
  for(const [key , value] of Object.entries(llaves)){
    const regex = new RegExp(value, "g");
    mensaje = mensaje.replace(regex, key);
  }
  return mensaje
}

