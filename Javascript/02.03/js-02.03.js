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


const listarProdutos = [
    {
        nome: "Computador",
        marca:  "Lenovo",
        preco: 3000,
        descricao:  "PC moderno com bom desempenho"
    },
    {
        nome: "Tablet",
        marca:  "Sansung",
        preco: 2000,
        descricao:  "Ótima velocidade de processamento"
    },
    {
        nome: "Celular",
        marca:  "Apple",
        preco: 6000,
        descricao:  "Ultra resistente"
    }
]

listarProdutos.forEach(produto => {
    document.writeln(`
        Produto: ${produto.nome} <br>   
        Produto: ${produto.marca} <br> 
        Produto: ${produto.preco} <hr>
    `)
})