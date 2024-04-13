import express from "express"
const app = express()

import characterRoutes from "./routes/characters.js"
import locationRoutes from "./routes/locations.js"
import path from "path"

// modelo - datos
// vista - mostramos
// controller - interaccion con el user / flujo entre modelo y la vista / solicitudes http
// router

// servicios? - funciones reutilizables controller

app.use(express.static('views'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/about', (req, res) => {
    res.sendFile('./views/file.html', {root: path.resolve()})
})

app.use('/character', characterRoutes)
app.use('/location', locationRoutes)



// pug
// ejs

app.listen(3000, () => {
    console.log("server running...")
})