'use strict'
import { getAllAlunos } from "../api/api.js"


const main = document.getElementById('main')

const dados = await getAllAlunos()

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

            const cardContainer = document.getElementById('cards-container')
            cardContainer.appendChild(card)
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

            const cardContainer = document.getElementById('cards-container')
            cardContainer.appendChild(card)
        }
    } else {
        throw new Error("Curso indisponível");
    }
}

const criarEstrutura = () => {
    criarBarraStatus()
    const cardContainer = document.createElement('div')
    cardContainer.id = 'cards-container'
    main.replaceChildren(cardContainer)
}

const criarBarraStatus = () => {
    const filtroContainer = document.getElementById("filtro-container")

    filtroContainer.innerHTML = `
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
    document.getElementById("status-dropdown").addEventListener('click', () => {
        const filterBox = document.getElementById("filter-box")
        if(filterBox.classList.contains("ativado")){
            filterBox.classList.remove("ativado")
            return
        }
        filterBox.classList.add("ativado")
    })
}

const adicionarEventosFiltro = (curso) => {
    const opcoesFiltro = document.querySelectorAll('input[name="filtro"]')
    const filterBox = document.getElementById("filter-box")

    opcoesFiltro.forEach(filtro => {
        filtro.addEventListener('change', async () => {
            if(filtro.id === 'todos'){
                const cardContainer = document.getElementById('cards-container')
                cardContainer.innerHTML = ""
                filterBox.classList.remove("ativado")
                dados.forEach(aluno => {
                    criarCards(aluno, curso)
                }) 
            }else if (filtro.id === 'finalizado-filtro'){
                const cardContainer = document.getElementById('cards-container')
                cardContainer.innerHTML = ""
                filterBox.classList.remove("ativado")
                dados.forEach(aluno => {
                    if(aluno.status === 'cursando' ){
                        criarCards(aluno, curso)
                    }
                }) 

            }else if (filtro.id === 'cursando-filtro'){
                const cardContainer = document.getElementById('cards-container')
                cardContainer.innerHTML = ""
                filterBox.classList.remove("ativado")
                dados.forEach(aluno => {
                    if(aluno.status === 'finalizado' ){
                        criarCards(aluno, curso)
                    }
                }) 
            }
        })
    } )

    
}

export const handlerAlunos = async (curso) => {
    criarEstrutura()
    adicionarEventosFiltro(curso)
    dados.forEach(aluno => {
        criarCards(aluno, curso)
    })
}

