import express from "express"

const router = express.Router()

router.get("/", (_req, res) =>{
    const servicos = [
        {
            nomeServico: "Troca de óleo",
            preco: 45.30,
            tempoHorasServico: 1.5 
        },
        {
            nomeServico: "Troca de pastilhas de freio",
            preco: 38.56,
            tempoHorasServico: 1
        },
        {
            nomeServico: "Manutenção preventiva em caixa de cambio",
            preco: 120,
            tempoHorasServico: 2.5 
        },
        {
            nomeServico: "Troca de faróis",
            preco: 120.30,
            tempoHorasServico: 1.5 
        },
        {
            nomeServico: "Troca de pneu",
            preco: 45,
            tempoHorasServico: 0.5
        },
        
    ]

    res.render('servicos', {
        servicos: servicos
    })
})

export default router