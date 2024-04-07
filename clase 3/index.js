// NPM INIT --Y

// filesystem

// const fs = require("node:fs")
const fs = require("fs")
// import fs from "fs"  =>> esm


// leer un archivo
// fs.readFile('data.txt', 'utf8', (err, data) => {
//     if(err){
//         console.log("Error de lectura: ", err)
//     }else{
//         console.log('data: ', data)
//     }
// })
// fs.readFile('hp.json', 'utf8', (err, data) => {
//     if(err){
//         console.log("Error de lectura: ", err)
//     }else{
//         console.log('data: ', data)
//         console.log(typeof data)
//     }
// })


// sobreescribir
// const contenido = "Holis, texto nuevo 2!";
// fs.writeFile('output.txt', contenido, 'utf8', (err) => {
//     if(err){
//         console.log("Error de lectura: ", err)
//     }else{
//         console.log('se escribio correctamente!')
//     }
// })

// sumar al final
// const contenido = "\r\n\nHolis";
// fs.appendFile('data.txt', contenido, 'utf8', (err) => {
//     if(err){
//         console.log("Error de esceitura: ", err)
//     }else{
//         console.log('se escribio correctamente!')
//     }
// })


// const watcher = fs.watch('data.txt')
// watcher.on('change',(event, file) => {
//     console.log("change", event)
//     console.log("file" + file + "was modified")
// })


// stats
// fs.stat('data.txt', (err, data) => {
//     if(err){
//         console.log("Error de lectura: ", err)
//     }else{
//         console.log('data: ', data)
//     }
// })

// fs.copyFile('data.txt', 'data-copy.txt', (err) => {
//     if(err){
//         console.log("Error de lectura: ", err)
//     }else{
//         console.log('data copied successfully!')
//     }
// })


// fs.rename('data.txt', 'new-data.txt', (err) => {
//     if(err){
//         console.log("Error de lectura: ", err)
//     }else{
//         console.log('data renamed successfully!')
//     }
// })

// console.log(__filename)
// console.log(__dirname)

// __filename
// fs.readdir(__dirname, (err, data) => {
//     if(err){
//         console.log("Error de lectura: ", err)
//     }else{
//         console.log(data)
//     }
// })

// fs.mkdir('files/videos', (err, data) => {
//     if(err){
//         console.log("Error de lectura: ", err)
//     }else{
//         console.log("yasss!")
//     }
// })

// fs.unlink('output.txt', (err) => {
//     if(err){
//         console.log("Error de lectura: ", err)
//     }else{
//         console.log("done")
//     }
// })

// fs.rmdir('new', (err) => {
//     if(err){
//         console.log("Error de lectura: ", err)
//     }else{
//         console.log("done")
//     }
// })