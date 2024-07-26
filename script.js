
let titulo = document.createElement("h1");
titulo.id = "titulo";
titulo.innerText = "Bem-vindo à Loja";

document.body.appendChild(titulo);


let produtoSimples = document.createElement("div");

let nomeProdutoSimples = document.createElement("h2");
nomeProdutoSimples.innerText = "Produto 1";

let descricaoProdutoSimples = document.createElement("p");
descricaoProdutoSimples.innerText = "Este é um ótimo produto.";

let precoProdutoSimples = document.createElement("p");
precoProdutoSimples.innerText = "R$ 100,00";

produtoSimples.appendChild(nomeProdutoSimples);
produtoSimples.appendChild(descricaoProdutoSimples);
produtoSimples.appendChild(precoProdutoSimples);

document.body.appendChild(produtoSimples);


let produtoComplexo = document.createElement("div");

let nomeProdutoComplexo = document.createElement("h2");
nomeProdutoComplexo.innerText = "Produto 2";

let descricaoProdutoComplexo = document.createElement("p");
descricaoProdutoComplexo.innerText = "Este é um excelente produto.";

let precoProdutoComplexo = document.createElement("p");
precoProdutoComplexo.innerText = "R$ 150,00";

let imagemProdutoComplexo = document.createElement("img");
imagemProdutoComplexo.src = "https://via.placeholder.com/150";
imagemProdutoComplexo.alt = "Imagem do Produto 2";

produtoComplexo.appendChild(nomeProdutoComplexo);
produtoComplexo.appendChild(descricaoProdutoComplexo);
produtoComplexo.appendChild(precoProdutoComplexo);
produtoComplexo.appendChild(imagemProdutoComplexo);

document.body.appendChild(produtoComplexo);
