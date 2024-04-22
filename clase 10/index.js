import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import usuarios_routes from "./routes/usuarios_routes.js"

mongoose
.connect("mongodb://127.0.0.1:27017/cursos")
.then(() => {console.log("conectado a MongoDB")})
.catch((err) => {console.log("No se pudo conectar: " + err)})

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/users", usuarios_routes)

app.get('/', (req, res) => {
    res.send("hola")
})


const PORT = process.env.PORT || 3002;
app.listen(PORT)