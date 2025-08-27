const pessoa = {}

document.write(`<p>${typeof pessoa}</p>`)

const carro = {
    modelo: "gol",
    cor:  "vermelho",
    acelerar(){
        return "Acelerando..."
    },
    frear (){
        return "<p>Freando</p>"
    }
}

document.write(`<p>${carro.modelo}</p>`)
document.write(`<p>${carro.acelerar()}</p>`)

const produto = {
    nome: "Computador",
    marca:  "Lenovo",
    preco: 3000,
    descricao:  "PC moderno com bom desempenho"
}

document.write(`<p>${produto.descricao}</p>`)
