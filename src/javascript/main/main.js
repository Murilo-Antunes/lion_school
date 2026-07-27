export const criarMain = ( )=>{
    const main = document.getElementById('main')
    main.innerHTML = `
        <div id="hero">
            <h1>Escolha um <span>curso</span> para gerenciar</h1>
            <img src="src/img/devices.png" alt="dispositivos">
            
        </div>
        <img src="src/img/studant.png" alt="estudante">
        <div id="buttons">
            <button class="button" id="ds"><img src="src/img/ds.png" alt="desenvolvimento"> DS</button>
            <button class="button" id="redes"><img src="src/img/redes.png" alt="redes"> REDES</button>
        </div>
    `
}