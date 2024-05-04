import Cursos from "../models/cursos_model.js";

async function getCursos(){
    let cursosActivos = await Cursos.find({"estado": true})
    .populate('autor',' nombre email -_id')
    return cursosActivos;
}

async function createCursos(req){
    let cursoNuevo = new Cursos({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        estado: true,
        autor: req.params.id
        // autor: {
        //     nombre:req.body.nombre,
        //     apellido:req.body.apellido,
        //     email:req.body.email
        // }
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