//Variável express importando o módulo Express
import express from "express"

//Variável app se torna uma instância da classe express
const app = express()

//Importando controllers
import IndexController from "./controllers/IndexController.js"
import ProdutosController from "./controllers/ProdutosController.js"
import ClientesController from "./controllers/ClientesController.js"
import ServicosController from "./controllers/ServicosController.js"

app.use("/", IndexController)
app.use("/produtos", ProdutosController)
app.use("/servicos", ServicosController)
app.use("/clientes", ClientesController)

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

