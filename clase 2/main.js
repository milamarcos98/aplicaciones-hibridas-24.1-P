// console.log("holis");
// console.log("holis 2");

const suma = (num1, num2) => {
    return num1 + num2
};

const resta = (num1, num2) => {
    return num1 - num2
};

const multiplicacion = (num1, num2) => {
    return num1 * num2
};

// commonjs
// module.exports = {suma, resta, multiplicacion}

export function greet(name){
    return `Hello, ${name}`
}

export default {resta, suma};