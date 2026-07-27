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
            const card_container = document.getElementById('cards-container')
            card_container.insertAdjacentHTML('beforeend', `
                <div class="card">
                    <img src="${dados.foto}" alt="Foto Aluno">
                    <p>${dados.nome}</p>
                </div>
            `)
        }
    } else {
        throw new Error("Curso indisponível");
    }
}

const criarEstrutura = () => {
    const card_container = document.createElement('div')
    card_container.id = 'cards-container'
    main.replaceChildren(card_container)
}

export const handlerAlunos = async (curso) => {
    const dados = await getAllAlunos()
    criarEstrutura()
    dados.forEach(aluno => {
        criarCards(aluno, curso)
    })
}