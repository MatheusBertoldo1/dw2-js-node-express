//Manipulando datas
document.write('<h4>Manipulando datas:<br></h4>')

//Criar uma instância da classe Date() do JS

const dataAtual = new Date();

document.write(dataAtual)

//Pegando o dia atual
const dia = dataAtual.getDate()
document.writeln(`<p>Hoje é dia: ${dia}</p>`)

//Pegando o mês atual
/*
É necessário acrescentar o +1 para realemente pegar o mês atual, pois, 
o JS define Janeiro como o mês 0.
Os mêses sendo um ciclo 'Janeiro - Dezembro' ele funciona assim
*/
const mes = dataAtual.getMonth()
document.writeln(`<p>Esse é o mês: ${mes + 1}</p>`)

const ano = dataAtual.getFullYear()
document.writeln(`<p>Esse é o ano: ${ano}</p>`)

//Adicionando Dias, Mêses ou Anos à data atual
dataAtual.setFullYear(dataAtual.getFullYear() + 4)

document.writeln(`<p>Esse é novo o ano: ${dataAtual.getFullYear()}</p>`)

//FORMATAÇÃO DE MOEDAS
const salario = 2300
const salarioReal = salario.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
}) 

document.write(`<p>O valor do salario atual é ${salarioReal}</p>`)

const salarioDolar = salario.toLocaleString("pt-br", {
    style: "currency",
    currency: "USD",
}) 

document.write(`<p>O valor do salario atual é ${salarioDolar}</p>`)


//Formatação de strings 
document.write("<h4>Formatação de strings</h4>")

const nome = 'Matheus Bertoldo'

//Removendo caracteres de espaço
const nomeSemEspaco = nome.replace(/\s/g, "")

document.write(`<p>O nome é ${nome}</p>`)
document.write(`<p>O nome usando Uppercase ficou ${nome.toUpperCase()}</p>`)
document.write(`<p>Contando as os caracteres da string com LENGHT e REPLACE: ${nomeSemEspaco.length} caracteres</p>`)

