import express from "express";
import Usuario  from "../models/usuarios_model.js";
import "dotenv/config";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const ruta = express.Router()

ruta.post('/', (req,res) =>{
    Usuario.findOne({email: req.body.email})
    .then(data => {
        if(data){
            const passwordValido = bcrypt.compareSync(req.body.password, data.password)
            if(!passwordValido) return res.status(400).json({msj:'password incorrecto'})
            const jwToken = jwt.sign({
        usuario: {_id:data._id,nombre:data.nombre, email:data.email}
        },process.env.SEED, {expiresIn: process.env.EXPIRATION})
        res.json({
            usuario:{
                _id:data._id,
                nombre:data.nombre, 
                email:data.email
            }, jwToken
        })
        }else{
            res.status(400).json({msj:'email incorrecto'})
        }
    })
})

export default ruta;