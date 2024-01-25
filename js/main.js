import {encriptacion} from "./encriptacion.js";

const textarea_input = document.getElementById("section__input")
const textarea_output = document.getElementById("section__output")

const button = document.getElementById("section__button--encriptar")


button.addEventListener("click", e => {
    const mensage = textarea_input.value;
    const new_mensage = encriptacion(mensage);
    textarea_output.value = new_mensage;
    textarea_output.style.height = `${new_mensage.length/3}px`;
})
