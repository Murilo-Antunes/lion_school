import { handlerAlunos } from "./main/alunos.js";
import { criarMain } from "./main/main.js";

handlerAlunos
criarMain()

document.getElementById('ds').addEventListener('click', () => {
    handlerAlunos('ds')
})

document.getElementById('redes').addEventListener('click', () => {
    handlerAlunos('redes')
})