import express from "express"
import Clientes from "../model/Cliente.js"
import { where } from "sequelize"

const router = express.Router()

router.get("/", async (_req, res) => {
    try {
        const clientes = await Clientes.findAll()

        res.render('clientes', {
            clientes: clientes 
        })
    } 
    catch (error) {
        console.error("Erro ao buscar clientes:", error);
    }
})

router.get('/editar/:id', async (req, res) => {
    const id = req.params.id
    const cliente = await Clientes.findOne({where: {id: id}})

    res.render('update', {
        cliente: cliente
    })
})

router.post("/update/:id", async (req, res) => {
    const idCliente = req.params.id;
    const { nome, idade, email } = req.body; 

    try {
        await Clientes.update({ nome, idade, email }, {
            where: { id: idCliente }
        });

        // 4. Redireciona de volta para a lista (para ver a alteração)
        res.redirect("/clientes"); 

    } catch (error) {
        console.error("Erro ao atualizar cliente:", error);
        res.status(500).send("Falha ao salvar as alterações.");
    }
});

router.post("/excluir", async (req, res) => {
    const idCliente = req.body.id; 

    try {
        await Clientes.destroy({
            where: { id: idCliente }
        });

        res.redirect("/clientes"); 

    } catch (error) {
        console.error("Erro ao excluir cliente:", error);
    }
});

router.get("/newClient", (_req, res) => {
    res.render("newClient"); 
});

router.post("/create", async (req, res) => {
    const { nome, idade, email } = req.body; 

    try {
        await Clientes.create({ nome, idade, email });

        res.redirect("/clientes"); 

    } catch (error) {
        console.error("Erro ao cadastrar novo cliente:", error);
    }
});

export default router