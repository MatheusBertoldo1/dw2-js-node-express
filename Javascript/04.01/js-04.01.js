/*

// Guardar um elemento do DOM dentro de uma variável
const parar = document.getElementById('parar');
const atencao = document.getElementById('atencao');

//Mudando a cor do elemento capturado na contante parar 
parar.style.backgroundColor = "red"
atencao.style.backgroundColor = "yellow"

*/

//Usando uma função para executar a troca de cor dos elementos 
function Parar()
{
    document.getElementById('parar').style.backgroundColor = 'red'
    
    //deixando as cores das outras bolinhas cinza novamente "apagando elas"
    document.getElementById('atencao').style.backgroundColor = 'gray'
    document.getElementById('prosseguir').style.backgroundColor = 'gray'
    
}

function Atencao()
{
    document.getElementById('atencao').style.backgroundColor = 'yellow'
    
    //deixando as cores das outras bolinhas cinza novamente "apagando elas"
    document.getElementById('prosseguir').style.backgroundColor = 'gray'
    document.getElementById('parar').style.backgroundColor = 'gray'
}

function Prosseguir()
{
    document.getElementById('prosseguir').style.backgroundColor = 'green'
    
    //deixando as cores das outras bolinhas cinza novamente "apagando elas"
    document.getElementById('atencao').style.backgroundColor = 'gray'
    document.getElementById('parar').style.backgroundColor = 'gray'
}