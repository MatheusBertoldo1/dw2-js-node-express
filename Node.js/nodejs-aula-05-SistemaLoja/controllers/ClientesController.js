import express from "express";
import Clientes from "../models/Cliente.js";

const router = express.Router();

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  //SELECT * FROM 
  Clientes.findAll().then(clientes => {
    res.render("clientes", {
      clientes: clientes
    });
  })
});

//  ROTA CADASTRO CLIENTES
router.post("/clientes/new", (req,res) =>{
  // COLETANDO OS DADOS NO FORMULÁRIO
  const nome = req.body.nome; //  variável = req.
  const cpf = req.body.cpf;
  const endereco = req.body.endereco

  Clientes.create({
    nome: nome,
    cpf: cpf,
    endereco: endereco
  }).then(() => {
    res.redirect("/clientes")
  }).catch(error => {
    console.log(error)
  })
});

// ROTA DE EXCLUSÃO DE DADOS
// :id é um parâmetro obrigatório
router.get("/clientes/delete/:id", (req, res) => {
  const id = req.params.id

  // .destroy -> exclui um registro do banco
  Clientes.destroy({
    where:{
      id: id
    }
  }).then(() => {
    res.redirect("/clientes")
  }).catch(error => {
    console.log(error)
  })
})

// ROTA DE EDIÇÃO DE CLIENTES
router.get("/clientes/edit/:id", (req, res) => {
  const id = req.params.id

  //Buscando o cliente pelo ID
  Clientes.findByPk(id).then(cliente => {
    res.render("clientesEdit", {
      cliente: cliente
    })
  })
})

export default router;
