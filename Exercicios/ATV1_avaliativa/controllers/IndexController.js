import express from "express"

const router = express.Router()

router.get("/", (_req, res) => {
    const clientes = [
        {
            nome: "Matheus",
            email: "matheus@email.com"
        }
    ]

    res.render("index", {
        clientes:clientes
    })
})

export default router