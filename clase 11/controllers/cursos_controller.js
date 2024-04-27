import Cursos from "../models/cursos_model.js";

async function getCursos(){
    let cursosActivos = await Cursos.find({"estado": true})
    return cursosActivos;
}

async function createCursos(req){
    let cursoNuevo = new Cursos({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        estado: true
    })
    return await cursoNuevo.save();
}

async function updateCursos(id, body){
    let cursoActualizado = await Cursos.findByIdAndUpdate(id, {
        $set: {
            titulo: body.titulo,
            descripcion: body.descripcion
        }
    }, {new: true})
    return cursoActualizado;
}

export {getCursos, createCursos, updateCursos}