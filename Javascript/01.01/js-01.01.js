//Tipos de funções

//Função simples
/*
VAR: Evitar o uso 
LET: Utilize quando for necessário reatribuir o valor da variável
CONST: Define uma variável com valor imutável
*/

const message = "<h2>Olá! Bem-vindo! Essa é sua primeira lição</h2>";
function showMessage() 
{
  document.write(message);
}

//Chamando a função simples
showMessage();

//Função com parâmetro
const user = "Matheus";

function userMessage(user)
{
    document.write(`<h3>O que deseja fazer hoje ${user} <h3>`)
}

userMessage(user)

//Função com mais de um parâmetro 
const n1 = 10;
const n2 = 12;

function mult(n1, n2)
{
  let result = n1 * n2;
  document.write(`A multiplicação é igual a ${result} <br>`);
}

mult(n1,n2);

//Função com retorno
const num1 = 1000;
const num2 = 5;

function div(num1, num2)
{
  return num1 / num2;
}

document.write(`Divisão de ${num1} por ${num2} é ${div(num1, num2)} <br>`)

//Função com diferentes retornos
const number = 5;

function parImpar(number)
{
  if (number % 2 == 0) {
    return 'par'
  }
  else{
    return 'impar'
  }
}

document.write(`O número ${number} é ${parImpar(number)}`)