import { llaves } from "./llaves.js";

function desencriptacion(mensage){
  for(const [key , value] of Object.entries(llaves)){
    const regex = new RegExp(value, "g");
    mensage = mensage.replace(regex, key);
  }
  return mensage
}

console.log(desencriptacion('fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!'))
