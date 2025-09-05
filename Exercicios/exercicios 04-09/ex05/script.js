document.write("<h4>Exibindo hora atual</h4>");

//Tarefa 1
const date = new Date()
document.write(date);

//Tarefa 2
document.write("<br><br><h4>Conversão de moedas</h4>");
const compraInternacional = 500
const valorConvertidoDolar = compraInternacional.toLocaleString("pt-br", {
    style: "currency",
    currency: "USD",
}) 

const valorConvertidoReal = compraInternacional.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
}) 

document.write(`<p>${valorConvertidoDolar}</p>`);

//Tarefa 03
document.write(`<p>${valorConvertidoReal}</p>`);

//Tarefa 04
document.write("<br><h4>Calculo de datas</h4>");

const dia = date.getDay()
document.write(`<p>Data atual : ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}</p>`);

date.setDate(date.getDay() + 12)


document.write(`<p>Data da entrega: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}</p>`);