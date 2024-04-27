import express from "express"
import { getCursos, createCursos, updateCursos } from "../controllers/cursos_controller.js"
import verificarToken from "../middlewares/auth.js"

const ruta = express.Router()

ruta.get('/', verificarToken, (req, res) =>{
    let resultado = getCursos()
    resultado
    .then(cursos => {
        res.json(cursos)
    })
    .catch(err => {
        res.status(400).json({err})
    })
})

ruta.post('/:id', (req, res) =>{
    let resultado = createCursos(req)
    resultado
    .then(curso => {
        res.json(curso)
    })
    .catch(err => {
        res.status(400).json({err})
    })
})

ruta.put('/:id', (req, res) =>{
   let body = req.body;
   let resultado = updateCursos(req.params.id, body)
    resultado
    .then(curso => {
        res.json(curso)
    })
    .catch(err => {
        res.status(400).json({err})
    })
})



export default ruta;