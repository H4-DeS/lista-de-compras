var frutasLegumes = ['Frutas e Legumes'];
var carnes = ['Carnes'];
var bebidas = ['Bebidas'];
var mercearia =['Mercearia'];
var doces = ['Doces'];
var categorias = [frutasLegumes, carnes, bebidas, mercearia, doces];
let categoria;
let indiceCat;
let tabela = "";

const botao = document.querySelector("#inserir");
const botaoImprimir = document.querySelector("#imprimir");
const areaImpressao = document.querySelector("#area_impressao");


function adicionaItem (item, indice){
    categorias[indice].push(item);  //a partir do indice, seleciona a array de destino do item 
}

function identificaCategoriaSelecionada(){
    categoria = document.querySelector('input[name=categorias_mercado]:checked'); //carrega radio button selecionado 
    indiceCat = categoria.value;                             //extrai valor do radio button
    item = document.querySelector('#userInput').value;       //captura o texto digitado pelo usuário no input
    adicionaItem(item, indiceCat);
    document.querySelector("#userInput").value ="";                           
}

botao.onclick = function() {
    identificaCategoriaSelecionada();
}

document.querySelector("#userInput").addEventListener('keydown', function(e) {
    if (e.key === 'Enter'){
        console.log(e);
        identificaCategoriaSelecionada();
    }
});


botaoImprimir.onclick = () => {

    for(let j=0; j<categorias.length; j++){
        tabela +=  "<ul><li class='categoriaLista'>"+`${categorias[j][0]}` + "<ul>";
       
        for(let i=0; i<categorias[j].length; i++){
            tabela += "<li class='itemLista'>"+`${categorias[j][i+1]}`+"</li>"; 
        }
        tabela += "</ul></ul></li>";
    }

    tabela += "</ul>";
    areaImpressao.innerHTML = tabela;
    tabela = "";
}