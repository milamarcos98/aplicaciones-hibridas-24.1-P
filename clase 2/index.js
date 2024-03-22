// Commonjs

// const operaciones = require("./main.js");
// console.log(operaciones.suma)

// const {suma} = require("./main.js");
// console.log(suma(2,4))

// const userData = require("./usuarios.json");
// console.log(userData.usuarios[0].nombre)


// esm

// import {greet} from "./main.js";
// console.log(greet("Cami"));

// import operaciones from "./main.js";
// console.log(operaciones)

// import userData from "./usuarios.json" assert {type: 'json'}

// console.log(userData)


// OS

const os = require("os");

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.totalmem())
// console.log(os.freemem())
// console.log(os.userInfo().homedir)

// PATH

const path = require("path")

const filename = __filename;
const dirname = __dirname;

// console.log(filename)
// console.log(dirname)

const joinedPath = path.join('archivos', 'file.txt')
// console.log(joinedPath)

const resolvedPath = path.resolve('archivos', 'file.txt')
// console.log(resolvedPath)

// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))

// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))

// console.log(path.parse(__filename))
// console.log(path.parse(__dirname))

// // const resolvedPath2 = path.resolve('usuarios.json')
// console.log(resolvedPath2)
// console.log(path.extname(resolvedPath2))

// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute("./usuarios.json"))

// console.log(path.parse(__filename))
// console.log(path.format(path.parse(__filename)))

console.log(path.join('carpeta','archivos', 'file.txt'))
console.log(path.join('/carpeta','archivos', 'file.txt'))
console.log(path.join('/carpeta','/archivos', 'file.txt'))
console.log(path.join('/carpeta','\\archivos', '../../file.txt'))