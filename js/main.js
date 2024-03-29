import {encriptacion} from "./encriptacion.js";
import {desencriptacion} from "./desencriptacion.js";

const textarea_input = document.getElementById("section__input");
const textarea_output = document.getElementById("section__output");

const button_encriptar = document.getElementById("section__button--encriptar");

const button_desencriptar = document.getElementById("section__button--desencriptar")
const button_copiar = document.getElementById("section__button--copiar")

textarea_input.addEventListener("input", e => {
    const texto_sin_acentos = textarea_input.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    textarea_input.value  = texto_sin_acentos.toLowerCase();
});

button_encriptar.addEventListener("click", e => {
    const mensaje = textarea_input.value;
    const new_mensaje = encriptacion(mensaje);
    new_mensaje.length > 0 ? textarea_output.style.backgroundImage = "none" : textarea_output.style.backgroundImage = "url(./assets/img_encriptador.jpg)";
    textarea_output.value = new_mensaje;
    textarea_input.value = "";
});

button_desencriptar.addEventListener("click", e => {
    const mensaje = textarea_input.value;
    const new_mensaje = desencriptacion(mensaje);
    textarea_output.value = new_mensaje;
    textarea_input.value = " ";
});

button_copiar.addEventListener("click", e => {
 textarea_output.select();
 navigator.clipboard.writeText(textarea_output.value)
    .then(() => {
        console.log("copiado")
    })
    .catch(err => {
        console.error(err)
    });
});
