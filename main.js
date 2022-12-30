var frutasLegumes = [];
var carnes = [];
var bebidas = [];
var mercearia =[];
var doces = [];
var categorias = [frutasLegumes, carnes, bebidas, mercearia, doces];
let categoria;
let indiceCat;

const botao = document.querySelector("#inserir")


function adicionaItem (item, indice){
    categorias[indice].push(item);  //a partir do indice, seleciona a array de destino do item 
}

botao.onclick = function identificaCategoriaSelecionada(){
    categoria = document.querySelector('input[name=categorias_mercado]:checked'); //carrega radio button selecionado 
    indiceCat = categoria.value;                             //extrai valor do radio button
    item = document.querySelector('#userInput').value;       //captura o texto digitado pelo usuário no input
    adicionaItem(item, indiceCat);                           
}

