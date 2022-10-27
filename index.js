
import { boton } from "./boton.js";
import { pedirDatos } from "./pedirDatos.js";
boton.addEventListener('click', (evento) => pedirDatos(evento));