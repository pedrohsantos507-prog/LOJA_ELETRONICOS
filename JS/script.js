const formProdutos = document.getElementById('form-produtos');
const listaProdutos = document.getElementById('lista-produtos');

const listaDeProdutosCadastrados = [];

formProdutos.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const marca = document.getElementById('produto').value;
    const modelo = document.getElementById('quantidade').value;
    const valor = parseFloat(document.getElementById('valor').value);


    listaDeProdutosCadastrados.push(novoProduto);
    adicionarNaTabela(novoProduto);

    formProdutos.reset();
});


function adicionarNaTabela(produto) {
    const tr = document.createElement('tr');

    const exibicaoIpva = produto.isento 
        ? `<span class="isento">Isento</span>` 
        : `R$ ${produto.valor.toFixed(2)}`;

    tr.innerHTML = `
        <td>${produto}</td>
        <td>${produto.quantidade} anos</td>
        <td><strong>R$ ${produto.valorFinal.toFixed(2)}</strong></td>
    `;

    listaProdutos.appendChild(tr);
}