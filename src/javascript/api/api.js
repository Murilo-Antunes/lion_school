const URL = 'https://lion-school-phbo.onrender.com'

export const getCursos = async () => {
    let urlCurso = `${URL}/cursos`
    let response = await fetch(urlCurso)
    let dados = await response.json()
    
    return dados
}

export const getAllAlunos = async () => {
    let urlCurso = `${URL}/alunos`
    let response = await fetch(urlCurso)
    let dados = await response.json()
    return dados
}

export const getAlunosCurso = async (idCurso) => {
    let urlCurso = `${URL}/alunos?curso_id=${idCurso}`
    let response = await fetch(urlCurso)
    let dados = await response.json()
    return dados
}
export const getAlunosStatus = async (status) => {
    let urlCurso = `${URL}/alunos?status=${status}`
    let response = await fetch(urlCurso)
    let dados = await response.json()
    return dados
}

export const getAluno = async (idAluno) => {
    let urlCurso = `${URL}/alunos/${idAluno}`
    let response = await fetch(urlCurso)
    let dados = await response.json()
    return dados
}

getAllAlunos(getAllAlunos)