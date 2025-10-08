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

export default router;

/* 
 const clientes = [
    {
      nome: "Ana Silva",
      cpf: "123.456.789-00",
      endereco:
        "Rua das Flores, 123, Bairro Jardim Primavera, Cidade Felicidade, Estado do Sonho, CEP: 12345-678",
    },
    {
      nome: "Pedro Almeida",
      cpf: "987.654.321-00",
      endereco:
        "Avenida Central, 456, Bairro Centro, Cidade Nova, Estado da Esperança, CEP: 98765-432",
    },
    {
      nome: "Marina Oliveira",
      cpf: "456.789.123-00",
      endereco:
        "Travessa dos Sonhos, 789, Bairro Vista Linda, Cidade Sol Nascente, Estado da Harmonia, CEP: 54321-987",
    },
    {
      nome: "Rafael Santos",
      cpf: "321.654.987-00",
      endereco:
        "Praça da Amizade, 321, Bairro Bela Vista, Cidade Alegria, Estado da Serenidade, CEP: 87654-321",
    },
  ];
*/