import express  from "express"
import Usuario from "../models/usuarios_model.js"

const ruta = express.Router()

ruta.get('/', (req, res) =>{
    let resultado = getUsers()
    resultado
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.status(400).json({err})
    })
})

ruta.post('/', (req, res) =>{
    let body = req.body;
    let resultado = createUser(body)
    resultado
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        res.status(400).json({err})
    })
})

// controller
async function getUsers(){
    let usuarios = await Usuario.find({estado:true});
    return usuarios;
}

async function createUser(body){
    let usuario = new Usuario({
        email: body.email,
        nombre: body.nombre,
        password: body.password,
        estado: body.estado
    })
    return await usuario.save();
}

export default ruta;