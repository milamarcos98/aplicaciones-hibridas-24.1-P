import mongoose from "mongoose";
const Schema = mongoose.Schema;

// relaciones por referencia (normalizacion)=> consistencia

// let usuario = {
//     iD:001,
//     nomrbe...
// }
// let curso={
//     id'adsfa0,
//     titulo... 
//     autor: [001]
// }

// relaciones por documento embebidos (desnormalizacion) => performance

// let curso = {
//     id:'sfsd',
//     titulo:'asdfsdf',
//     autor: {
//         nombre:'sdfdf',
//         apellido:'sdfdf'
//     }
// }

const autorSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String
})

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
    },
    // autor/profe
    // autor: [autorSchema] //documentos embebidos
    autor: {
        type: Schema.Types.ObjectId, ref: 'Usuarios'
    } // por referencia
})

export default mongoose.model('Cursos', cursoSchema)