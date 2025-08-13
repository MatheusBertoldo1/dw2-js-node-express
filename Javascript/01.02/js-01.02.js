//Função anônima 
const soma = function (n1, n2){
    return n1 + n2;
}

document.write(`<p>O resultado da soma ${soma(10 ,20)} </p>`)

const tipo = typeof(soma)
document.write(tipo)

//arrow functions (com apenas um parametro pode se ocultar os parênteses (x) => {} / x => {})
const dobro = x => 
{
    return x *2
}


//arrow functions com mais de um parametro
const calc = (num1, num2, operador) => {
    //eval: calculos entre dois numeros e um operador
    return eval(`${num1} ${operador} ${num2}`)
}

document.write(`<br> O resultado da operação é ${calc(1000, 500, "+")}`)


//SIMPLIFICANDO arrow functions com UM ÚNICO RETORNO
const calculadora = (num1, num2, operador) => 
    eval(`${num1} ${operador} ${num2}`)

document.write(`<br> O resultado da operação é ${calculadora(1000, 500, "-")}`)

const dobros = x => x * 2;

//IIFE Função imediata (Immediately Invoke Function Expression)
const iife = (function (){document.write("<br>Sou uma função que está sendo executada sem precisar ser invocada")})();

const loadUser = (function(user){ document.write(`<br> Carregando informações do usuario ${user}`)})('Matheus')
