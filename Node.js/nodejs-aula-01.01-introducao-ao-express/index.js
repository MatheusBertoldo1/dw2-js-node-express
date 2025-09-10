// Importando o Express (Framework)
const express = require("express")

// Iniciando o Express na variavel "app"
const app = express()

// CONFIGURANDO O EJS
app.set('view engine', 'ejs')

// ------ ROTAS ------
// req --> trata a requisição
// res --> trata a resposta

// ROTA PRINCIPAL
app.get("/", (req, res) => {
    res.send("<h1>Bem vindo ao meu primeiro site com js</h1>")
})

// ROTA PRODUTOS
app.get("/produtos", (req, res) => {
    res.send("<h1>Pagina Produtos</h1>")
})

// ROTA CLIENTES
app.get("/clientes", (req, res) => {
    res.send("<h1>Pagina Clientes</h1>")
})

// ------ SERVIDOR ------
// Iniciando o servidor HTTP na porta 8080
const port = 8080

// Método para iniciar o servidor e verificar a conexão
app.listen(port, (error) => {
    if(error)
    {
        console.log(`Não foi possível iniciar o servidor. Erro: ${error}`)        
    }
    else
    {
        console.log(`Servido iniciado com sucesso em http://localhost:${port}`)
    }
})