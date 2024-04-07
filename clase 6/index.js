import express  from "express";

const app = express();

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))


const users = [
    {nombre: "Camila", apellido: "Marcos"},
    {nombre: "Juan", apellido: "Marcos"}
]

app.get("/users", (req, res) => {
    if(req.query.apellido){
        res.send({usuario: req.query.apellido})
    }
    res.send({users})
})

// parametro
app.get("/users/:nombre", (req, res) => {
    res.status(200).send({usuario: req.params.nombre})
})

app.post("/users", (req, res) => {
    let user = req.body;
console.log(user)
    if(!user?.nombre || !user?.apellido){
        return res.status(400).send({status: "error", error: "valores incompletos"})
    }

    users.push(user)
console.log(users)
    res.status(201).send({status: "success", message: {"User created: " : user}})
    

    
})

app.put("/users/:pos", (req, res) => {
    let user = req.body;
    let pos = req.params.pos;

    if(!user?.nombre || !user?.apellido){
        return res.status(400).send({status: "error", error: "valores incompletos"})
    }

    users[pos] = user;

    res.status(200).send({status: "success", message: {"User modified: " : users}})
})

const server = app.listen(3000, () => console.log("running on port http://localhost:3000"))