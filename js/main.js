import {encriptacion} from "./encriptacion.js";
import {desencriptacion} from "./desencriptacion.js";

const textarea_input = document.getElementById("section__input")
const textarea_output = document.getElementById("section__output")

const button_encriptar = document.getElementById("section__button--encriptar")

const button_desencriptar = document.getElementById("section__button--desencriptar")


button_encriptar.addEventListener("click", e => {
    const mensage = textarea_input.value;
    const new_mensage = encriptacion(mensage);
    textarea_output.value = new_mensage;
    textarea_output.style.height = `${new_mensage.length/3}px`;
})

button_desencriptar.addEventListener("click", e => {
    const mensage = textarea_input.value;
    const new_mensage = desencriptacion(mensage);
    textarea_output.value = new_mensage;
    textarea_output.style.height = `${new_mensage.length/3}px`;
})
