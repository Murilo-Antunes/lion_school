'use strict'

const main = document.getElementById('main')
const filtroContainer = document.getElementById("filtro-container")

export const criarPaginaAluno = (dados) =>{
    filtroContainer.innerHTML = ""
    main.innerHTML = `
        <div class="nota-aluno-container" id="nota-aluno-container">
            <div class="card-aluno" id="card-aluno">
                <figure class="img-container">
                    <img src="${dados.foto}" alt="">
                </figure>
                
                <p class="nome">${dados.nome}</p>
            </div>

            <div class="notas-container" id="notas-container">
                
                ${dados.desempenho.map(nota => `
                    <div class="pill-nota">
                    <p>${nota.valor}</p>
                    <div class="progress-container">
                        <div class="progress" "style = height: ${nota.valor}";></div>
                    </div>
                    <p>${nota.categoria}</p>
                </div>`).join("")}
            </div>
        </div>
    `
}