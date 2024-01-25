import { llaves } from "./llaves.js";

export function desencriptacion(mensage){
  for(const [key , value] of Object.entries(llaves)){
    const regex = new RegExp(value, "g");
    mensage = mensage.replace(regex, key);
  }
  return mensage
}

