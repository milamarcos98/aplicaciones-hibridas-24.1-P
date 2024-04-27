import mongoose from "mongoose";

const cursoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: false
    },
    estado: {
        type: Boolean,
        required: true
    },
    imagen: {
        type: String,
        required: false
    }
    // autor/profe
})

export default mongoose.model('Cursos', cursoSchema)