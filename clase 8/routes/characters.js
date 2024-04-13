import express  from "express";
import {promises} from "fs";
const router = express.Router()

// filtrado por id
// localhost:3000/character/:id

router.get("/", (req, res) => {
    promises.readFile("./model/simpsons.json")
    .then(data => {
        const personajes = JSON.parse(data);
        res.status(200).json(personajes)
    })
    .catch(error => {
        res.status(404).json({err: 35445, message: error.message})
    })
})

router.get("/:id", (req, res) => {
    promises.readFile("./model/simpsons.json")
    .then(data => {
        const personajes = JSON.parse(data);
        const personaje = personajes.find(p => p.id == req.params.id)
        res.status(200).json(personaje)
    })
    .catch(error => {
        res.status(404).json({err: 35445, message: error.message})
    })
})

router.post("/", (req, res) => {
    promises.readFile("./model/simpsons.json")
    .then(data => {
        const personajes = JSON.parse(data);
        const personaje = req.body;
        personaje.id = personajes.length + 1
        personajes.push(personaje)
        promises.writeFile("./model/simpsons.json", JSON.stringify(personajes))
        .then(() => {
            res.status(201).json(personajes)
        })
    })
    .catch(error => {
        res.status(404).json({err: 35445, message: error.message})
    })
})

router.put("/:id", (req, res) => {
    promises.readFile("./model/simpsons.json")
    .then(data => {
        const personajes = JSON.parse(data);
        const personaje = personajes.find((p) => p.id == req.params.id)
        
        if(personaje){
            const index = personajes.indexOf(personaje)
            personajes[index] = {id: parseInt(req.params.id),
                ...req.body
            }
            promises.writeFile("./model/simpsons.json", JSON.stringify(personajes))
        .then(() => {
            res.status(201).json(personajes[index])
        })
        }
        
       
    })
    .catch(error => {
        res.status(404).json({err: 35445, message: error.message})
    })
})

router.patch("/:id", (req, res) => {
    promises.readFile("./model/simpsons.json")
    .then(data => {
        const personajes = JSON.parse(data);
        const personaje = personajes.find((p) => p.id == req.params.id)
        
        if(personaje){
            const index = personajes.indexOf(personaje)
            personajes[index] = {id: parseInt(req.params.id), ...personajes[index],...req.body
            }
            promises.writeFile("./model/simpsons.json", JSON.stringify(personajes))
        .then(() => {
            res.status(201).json(personajes[index])
        })
        }
    })
    .catch(error => {
        res.status(404).json({err: 35445, message: error.message})
    })
})


export default router;