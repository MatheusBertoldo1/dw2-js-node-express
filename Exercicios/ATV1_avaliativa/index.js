//Variável express importando o módulo Express
const express = require("express")

//Variável app se torna uma instância da classe express
const app = express()

//O método listen torna o código um "ouvinte" e aguardando requisições HTTP do navegador
app.listen(8080, function(error){
    if (error) 
        console.log("Ocorreu um erro")
    else
        console.log("Conexão realizada com sucesso")
})

app.get("/", function (req, res) {
    res.send("<h1>Titulo da pagina</h1>")
})
