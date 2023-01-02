var frutasLegumes = ['Frutas e Legumes'];
var carnes = ['Carnes'];
var bebidas = ['Bebidas'];
var mercearia =['Mercearia'];
var doces = ['Doces'];
var categorias = [frutasLegumes, carnes, bebidas, mercearia, doces];
let categoria;
let indiceCat;
let tabela = "";

let removeItemBotao = [];

const botaoInserir = document.querySelector("#inserir");
const botaoImprimir = document.querySelector("#imprimir");
const areaImpressao = document.querySelector("#area_impressao");


function adicionaItem (item, indice){
    if(item != "" && item != null)
        categorias[indice].push(item);  //a partir do indice, seleciona a array de destino do item 
}

function identificaCategoriaSelecionada(){
    categoria = document.querySelector('input[name=categorias_mercado]:checked'); //carrega radio button selecionado 
    indiceCat = categoria.value;                             //extrai valor do radio button
    item = document.querySelector('#userInput').value;       //captura o texto digitado pelo usuário no input
    adicionaItem(item, indiceCat);
    document.querySelector("#userInput").value ="";                           
}

function atualizaLista() {
    const titulo = document.querySelector(".tituloLista");
    titulo.hidden = false;
    for(let j=0; j<categorias.length; j++){
        tabela +=  "<ul><li class='categoriaLista'>"+`${categorias[j][0]}` + "<ul>";
       
        for(let i=0; i<categorias[j].length; i++){
            if(categorias[j][i+1] != undefined && categorias[j][i+1] != null){
                tabela += "<li class='itemLista'>"+`${categorias[j][i+1]}`+"<button class='removeItem' data-j='" +`${j}`+ "' data-i='" +`${i+1}`+ "'>x</button></li>"; 
            }
        }
        tabela += "</ul></ul></li>";
    }

    tabela += "</ul>";
    areaImpressao.innerHTML = tabela;
    tabela = "";

    //adiciona à variável botaoRemove apenas quando existir o primeiro item incluído na lista
    funçãoRemoveItem();
    
   
}

function funçãoRemoveItem() {
    removeItemBotao = document.querySelectorAll("[data-j]"); 

    removeItemBotao.forEach((elemento) => {
        elemento.addEventListener("click", (evento) => {
            itemRemover = categorias[evento.target.dataset.j][evento.target.dataset.i];
            categorias[evento.target.dataset.j].splice(evento.target.dataset.i, 1);
            atualizaLista();
        });
    });
}

botaoInserir.onclick = function() {
    identificaCategoriaSelecionada();
    atualizaLista();
}

document.querySelector("#userInput").addEventListener('keydown', function(e) {
    if (e.key === 'Enter'){
        identificaCategoriaSelecionada();
        atualizaLista();
    }
});

botaoImprimir.onclick = atualizaLista;


