import { criarMain } from "./main/main.js";
import { getCursos } from "./api/api.js";

const cursos = await getCursos()
criarMain(cursos)

document.getElementById(`botao-sair`).addEventListener(`click`, () => {criarMain(cursos)})




