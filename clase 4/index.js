import express from "express";

const app = express();

app.get("/saludo", (req, res) => {
    res.send("hola desde express!")
})

app.get("/params/:nombre/:apellido", (req, res) => {
//    console.log(req.params.nombre)
//    console.log(req.params.apellido)
let name = req.params.nombre;
let lastname = req.params.apellido;
   res.send(`Bienvenido 
   ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()} 
   ${lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase()}`)
})

app.get("/params/test", (req, res) => {
    res.send("testiing")
    })
// camila => Camila

const usuarios = [
    {id: 1, nombre: "Juan", apellido: "Perez", carrera: "DM"},
    {id: 2, nombre: "Pepe", apellido: "Perez", carrera: "DW"},
    {id: 3, nombre: "Maria", apellido: "Gonzalez", carrera: "DM"},
    {id: 4, nombre: "Carlos", apellido: "Perez", carrera: "DW"},
    {id: 5, nombre: "Lucia", apellido: "Ramirez", carrera: "DW"},
]

app.get("/api", (req, res) => {
    res.send(usuarios)
})

app.get("/queries", (req, res) => {
    // let carrera = req.query.carrera;
    let {carrera} = req.query;
    // res.send(carrera)
    if(!carrera || (carrera.toUpperCase() != "DM" && carrera.toUpperCase() != "DW")) return res.send({usuarios})
    let filterUsers = usuarios.filter(u => u.carrera === carrera.toUpperCase())
    res.send(filterUsers)
})

app.get("/noqueries", (req, res) => {
    if(Object.keys(req.query).length > 0){
        res.send({usuarios})
    }else{
        res.send({message: "enviar queries"})
    }
})

// buscador por id
// id es un parametro





app.listen(3000, () => console.log("server running on port http://localhost:3000"))