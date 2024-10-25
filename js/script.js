// document.getElementById('imagem')
// document.getElementById('nome')
// document.getElementById('status')
// document.getElementById('especie')

area = document.getElementById('area')

const adicionarElementos = (foto, nome, status, localizacao,  genero , especie, nomeEp, episodio) =>{
    area.innerHTML = `

            <div class="foto">
                <img id="imagem" src="${foto}" alt="Character Image">
            </div>
            <div class="informacoes ">
                <h2 class="nome " id="nome">${nome}</h2>
                <p class="status ">Status: <span id="status">${status}</span></p>
                <p class="localizacao ">localizacao: <span id="localizacao">${localizacao}</span></p>
                <p class="especie ">
                    <h3>Genero: </h3>
                    <span id="genero">${genero}</span>
                    <h3>Espécie: </h3>
                    <span id="especie">${especie}</span>
                </p>
                <div class="epsidio ">
                    <h3>Episódio</h3>
                    <p>Nome do Episódio: <span id="nomeEpisodio">${nomeEp}</span></p>
                    <p>Número do Episódio: <span id="numeroEpsodio">${episodio}</span></p>
                </div>
            </div>

    `
}

const elementoFetch = (url, urlEpisodio)=>{
     
fetch(url)
.then((results) =>{
    return results.json()
})
.then((data) =>{

    fetch(urlEpisodio)
    .then((results) =>{
        return results.json()
    })
    .then((dataEpisode) =>{
        console.log(dataEpisode.results)
        console.log(dataEpisode.name)
        adicionarElementos(data.image, data.name , data.status , data.location.name,  data.gender,  data.species , dataEpisode.name , dataEpisode
            .episode)
    })
    .catch((err)=>{
        console.log(err)
    })
    
})
.catch((err) => {
    console.log(err)
})

}

formulario = document.getElementById("Btn_formulario")

formulario.addEventListener('click' , (ev)=>{

    ev.preventDefault()

   valorDigitado = document.getElementById('character-id').value
   console.log(valorDigitado)

   if (valorDigitado >826){
        alert("Digite um número entre 1 e 826")
   }else{

    url = `https://rickandmortyapi.com/api/character/${valorDigitado}`
    urlEpisodio = `https://rickandmortyapi.com/api/episode/${valorDigitado}`

    elementoFetch(url, urlEpisodio)
   }


})



