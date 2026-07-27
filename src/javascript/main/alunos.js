'use strict'
import { getAllAlunos } from "../api/api.js"

const main = document.getElementById('main')

const validarAluno = (aluno) => aluno.curso_id === 1

const criarCards = (dados, curso) => {
    if (curso === 'ds') {
        if (validarAluno(dados)) {
            
            const card = document.createElement('div')
            const img = document.createElement('img')
            const p = document.createElement('p')

            card.classList.add('card')
            if(dados.status == 'finalizado') 
                card.classList.add('finalizado')
            img.src = dados.foto
            p.textContent = dados.nome

            card.replaceChildren(img, p)

            const card_container = document.getElementById('cards-container')
            card_container.appendChild(card)
        }
    } else if (curso === 'redes') {
        if (!validarAluno(dados)) {
            const card = document.createElement('div')
            const img = document.createElement('img')
            const p = document.createElement('p')

            card.classList.add('card')
            if(dados.status == 'finalizado') 
                card.classList.add('finalizado')
            img.src = dados.foto
            p.textContent = dados.nome

            card.replaceChildren(img, p)

            const card_container = document.getElementById('cards-container')
            card_container.appendChild(card)
        }
    } else {
        throw new Error("Curso indisponível");
    }
}

const criarEstrutura = () => {
    criarBarraStatus()
    const card_container = document.createElement('div')
    card_container.id = 'cards-container'
    main.replaceChildren(card_container)
}

const criarBarraStatus = () => {
    const filtro_container = document.getElementById("filtro-container")

    filtro_container.innerHTML = `
        <section class="filtro">
            <div class="status-filtro">
                <button class="status-dropdown" id="status-dropdown">Status</button>
                <div class="filter-box" id="filter-box">
                    <label>
                        <input type="radio" name="filtro" id="todos"  value="todos" checked>
                        Todos
                    </label>

                    <label >
                        <input type="radio" name="filtro" id="finalizado-filtro" value="finalizado">
                        Finalizado
                    </label>

                    <label>
                        <input type="radio" name="filtro" id="cursando-filtro" value="cursando">
                        Cursando
                    </label>
                </div>
            </div>

            <div class="legenda-container">
                <h2>Legenda</h2>
                <div class="cor-legenda cursando"></div>
                <h3>Cursando</h3>
                <div class="cor-legenda finalizado"></div>
                <h3>Finalizado</h3>
            </div>
        </section>
    `

}

export const handlerAlunos = async (curso) => {
    const dados = await getAllAlunos()
    criarEstrutura()
    dados.forEach(aluno => {
        criarCards(aluno, curso)
    })
}

