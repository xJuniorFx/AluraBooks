const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtraLivros))

function filtraLivros(){

    const elementoBtn = document.getElementById(this.id)

    const categoria = elementoBtn.value

    let Livrosfiltrados = categoria == 'disponivel' ? filtraDisponibilidade() : filtraCategorias(categoria)

    exibeLivros(Livrosfiltrados);
    
    if(categoria == 'disponivel'){

        const valorTotal = ValorLivrosDisponiveis(Livrosfiltrados)

        exibiValorDosLivrosDisponiveis(valorTotal)
    }
}

function filtraCategorias(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtraDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibiValorDosLivrosDisponiveis(valorTotal){

    valorTotaLivros.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
    
}


