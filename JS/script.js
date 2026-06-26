const formProdutos = document.getElementById('form-produtos');
const listaProdutos = document.getElementById('lista-produtos');

const listaDeProdutosCadastrados = [];


formProdutos.addEventListener('submit', function(event) {

event.preventDefault();


const nomeProduto = document.getElementById('produto').value;
const quantidade = document.getElementById('quantidade').value;
const valor = Number(document.getElementById('valor').value);


const novoProduto = {
nome: nomeProduto,
quantidade: quantidade,
valor: valor
};


listaDeProdutosCadastrados.push(novoProduto);

adicionarNaTabela(novoProduto);


formProdutos.reset();

});


function adicionarNaTabela(produto) {

const tr = document.createElement('tr');
 

tr.innerHTML = `
<td>${produto.nome}</td>
<td>${produto.quantidade}</td>
<td>R$ ${produto.valor.toFixed(2)}</td>
`;


listaProdutos.appendChild(tr);
 }
