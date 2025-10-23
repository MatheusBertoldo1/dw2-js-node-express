import express from 'express'
const router = express.Router()

import User from '../models/User.js'

router.get('/login', (_req, res) =>{
    res.render("login")
})

router.get('/cadastro', (_req, res) =>{
    res.render("cadastro")
})

// ROTA DE CRIACAO DE USUÁRIO
router.post('/crateUser', (_req, res) =>{
    const email = requestAnimationFrame.body.email
    const password = requestAnimationFrame.body.email

    //Enviando para o banco
    User.create({
        email: email,
        password: password
    }).then(() => res.redirect('/login')).catch(error => console.log(error))
})

export default router