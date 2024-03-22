// import esm in cjs
import("./module.mjs").then(({greet}) => {
    console.log(greet("Cami"))
})

function greet2(name){
    return `Hello, ${name}`
}

module.exports = {greet2}