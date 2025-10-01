import express from "express"

const router = express.Router()

router.get("/", (_req, res) => {
    const produtos = [
        {
            nomeProduto: "Pneu aro 18",
            preco: 250.30,
            quantidadeEstoque: 8
        },
        {
            nomeProduto: "Correia de transmissão",
            preco: 30,
            quantidadeEstoque: 12
        },
        {
            nomeProduto: "Caixa de câmbio",
            preco: 360.60,
            quantidadeEstoque: 2
        },
        {
            nomeProduto: "Farol dianteiro",
            preco: 150.30,
            quantidadeEstoque: 4
        },
        {
            nomeProduto: "Parafusos 3/4",
            preco: 1.33,
            quantidadeEstoque: 68
        }
    ]
    res.render("produtos", {
        produtos: produtos
    })
})

export default router