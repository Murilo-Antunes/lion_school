'use strict'
import { handlerAlunos } from "./alunos.js"

export const criarMain = (cursos)=>{
    const main = document.getElementById('main')
    main.innerHTML = `
        <div id="hero">
            <h1>Escolha um <span>curso</span> para gerenciar</h1>
            <img src="src/img/devices.png" alt="dispositivos">
            
        </div>
        <img src="src/img/studant.png" alt="estudante">
        <div id="buttons">   
            ${cursos.map(curso => `<button class="button" id="${curso.sigla}"><img src="${curso.icon}"alt="redes">REDES</button>`).join('')}
        </div>
    `
    cursos.forEach(curso => {
      criarEventoCurso(curso)  
    })
}

const criarEventoCurso = (curso) => {
    document.getElementById(curso.sigla).addEventListener('click', () => {
        handlerAlunos(curso.sigla.toLowerCase())
    })
}