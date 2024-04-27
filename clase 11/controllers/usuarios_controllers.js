import Usuario from "../models/usuarios_model.js"

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

async function updateUser(email, body){
    let usuario = await Usuario.updateOne({"email": email}, {
        $set: {
            nombre: body.nombre,
            password: body.password
        }
    })
    return usuario;
}

export { getUsers, createUser, updateUser}