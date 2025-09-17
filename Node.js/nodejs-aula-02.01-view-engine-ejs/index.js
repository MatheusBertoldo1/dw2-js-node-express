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
    res.render("index")
})

// ROTA PRODUTOS
app.get("/produtos", (req, res) => {
    // const produtos = ["Computador", "Celular", "Tablet", "Notebook"]

    // Array de objetos com produtos
    const produtos = [
        {nome : "Celular", preco : 3000},
        {nome : "Tablet", preco : 2000},
        {nome : "Computador", preco : 5000},
        {nome : "Notebook", preco : 2500}
    ]

    res.render("produtos", {
        produtos : produtos
    })
})

// ROTA CLIENTES
app.get("/clientes", (req, res) => {
    const clientes = [
        {nome : "Ricardo", cpf : "123.456.789-00", endereco : "Rua das Flores"},
        {nome : "Isaac", cpf : "123.456.789-01", endereco : "Rua das Diamante"},
        {nome : "Ana Flávia", cpf : "123.456.789-02", endereco : "Rua das Ceará"},
        {nome : "Renan", cpf : "123.456.789-03", endereco : "Rua das Curitiba"}
    ]
    res.render("clientes",{
        clientes : clientes
    })
})

// ROTA PERFIL
app.get("/perfil", (req, res) => {
    //Criando a variável que será enviada para página
    const user = "Matheus Bertoldo"

    res.render("perfil", {
        //Enviando variáveis para a pagina EJS 
        user : user
    })
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