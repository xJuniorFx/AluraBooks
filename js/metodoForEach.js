const elementoParaInserirLivros = document.getElementById('livros')
const valorTotaLivros = document.getElementById('valor_total_livros_disponiveis')

function exibeLivros(listaLivros){

    valorTotaLivros.innerHTML = ''
    elementoParaInserirLivros.innerHTML = ''

    listaLivros.forEach(livro => {

      /*  
      verificação com if
      let disponibilade = verificaSeDisponivel(livro) */

      let disponibilade = livro.quantidade <= 0 ? 'livro__imagens indisponivel' : 'livro__imagens'
        
      elementoParaInserirLivros.innerHTML += `
        
        <div class="livro">
        <img class="${disponibilade}" src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
        </div>
        
        `


    })
}

/* function verificaSeDisponivel(livro){
  if (livro.quantidade <= 0){
    return 'livro__imagens indisponivel'

  } else{
    return 'livro__imagens'

  }
} */