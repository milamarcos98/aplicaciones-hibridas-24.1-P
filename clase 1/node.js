console.log("inicio")

function dos(){
    setTimeout(function(){
        console.log("dos")
    },1000)
}

function uno(){
    setTimeout(function(){
        console.log("uno")
    },0)
    dos()
    console.log("tres")
}

uno()

console.log("fin")