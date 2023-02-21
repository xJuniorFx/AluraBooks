function aplicandoDescontos(livros){

    const desconto = 0.3

    let descontoAplicado = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })

    return descontoAplicado
}