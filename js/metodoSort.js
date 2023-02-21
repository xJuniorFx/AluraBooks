const btnSortPreco = document.getElementById('btnOrdenarPorPreco')

btnSortPreco.addEventListener('click', SortPreco)

function SortPreco(){
    
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)

    exibeLivros(livrosOrdenados)
}