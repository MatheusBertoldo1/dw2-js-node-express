//Variável express importando o módulo Express
const express = require("express")

//Variável app se torna uma instância da classe express
const app = express()

//Importando controllers
import IndexController from "./controllers/IndexController.js"

// Configurando o ejs
app.set("view engine", "ejs")

//Definindo a parta public para guardar arquivos estáticos
app.use(express.static("public"))

//O método listen torna o código um "ouvinte" e aguardando requisições HTTP do navegador
app.listen(8080, function(error){
    if (error) 
        console.log("Ocorreu um erro")
    else
        console.log("Conexão realizada com sucesso")
})

