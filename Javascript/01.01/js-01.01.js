//Tipos de funções

//Função simples
/*
VAR: Evitar o uso 
LET: Utilize quando for necessário reatribuir o valor da variável
CONST: Define uma variável com valor imutável
*/

const message = "<h2>Olá! Bem-vindo! Essa é sua primeira lição</h2>";
function showMessage() {
  document.write(message);
}

//Chamando a função simples
showMessage();

//Função com parâmetro
const user = "Matheus";

function userMessage(user){
    document.write(`<h3>O que deseja fazer hoje ${user} <h3>`)
}

userMessage(user)