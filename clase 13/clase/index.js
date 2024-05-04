import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import usuarios_routes from "./routes/usuarios_routes.js"
import cursos_routes from "./routes/cursos_routes.js"
import auth from "./routes/auth.js"
// mongorestore --uri mongodb+srv://milamarcos98:1234@cluster0.qowvrfl.mongodb.net/clase12p "C:\Users\Alumno\Desktop\dump\dump\cursos"
mongoose
.connect(process.env.CONNECTION)
// .connect("mongodb://127.0.0.1:27017/cursos")
.then(() => {console.log("conectado a MongoDB")})
.catch((err) => {console.log("No se pudo conectar: " + err)})

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/users", usuarios_routes)
app.use("/cursos", cursos_routes)
app.use("/login", auth)

app.get('/', (req, res) => {
    res.send("hola")
})


const PORT = process.env.PORT || 3002;
app.listen(PORT)