import mongoose from "mongoose"

const usuariosSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    estado:{
        type: Boolean,
        required: true
    },
    imagen:{
        type: String,
        required: false
    }
})

export default mongoose.model('Usuarios', usuariosSchema)