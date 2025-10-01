import express from "express"

const router = express.Router()

router.get("/", (_req, res) => {
    
    const dadosClientes = [
        {
            nome: "Matheus",
            idade: 24,
            email: "matheus@email.com"
        },
        {
            nome: "Arthur",
            idade: 18,
            email: "arthur@email.com"
        },
        {
            nome: "João",
            idade: 19,
            email: "joao@email.com"
        },
        {
            nome: "Guilherme",
            idade: 18,
            email: "guilherme@email.com"
        },
        {
            nome: "Gustavo",
            idade: 22,
            email: "gustavo@email.com"
        },
    ]

    res.render("clientes", {
        clientes: dadosClientes
    })
})

export default router