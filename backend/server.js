import express from 'express'
import prisma from '@prisma/client'

const app = express()
app.use(express.json())

//rota post dos usuarios
app.post("/user", async (req, res) =>{
    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })
    res.status(200).json(req.body)
})

//rota get dos usuarios
app.get("/user", async (req, res) => {

    const users = await prisma.user.findMany()

    res.status(200).json(users)
})

//rota put dos usuarios
app.put("/user:id", async (req,res) => {

    await prisma.user.update({
        where : {
            id: req.params
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    res.status(200).json({message: "Usuario editado com sucesso"},req.body)
})

//rota delete
app.delete("/user:id", async (req, res) => {
    await prisma.user.delete({
        where: id.req.params
    })
    res.status(200).json({message: "Usuario deletado com sucesso"})
})

// porta do server localhost
app.listen(3000)