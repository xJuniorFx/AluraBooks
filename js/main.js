let livros = []

const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscaLivrosAPI()


async function getBuscaLivrosAPI(){

    const res = await fetch(endPointAPI)

    livros = await res.json()

    let livrosComDescontos = aplicandoDescontos(livros)

    exibeLivros(livrosComDescontos)

}
