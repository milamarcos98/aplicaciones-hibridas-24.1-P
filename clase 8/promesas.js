// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('se resolvio!')
//         reject('no se resolvio!')
//     }, 2000);
// })


// promesa
// .then(resultado => console.log(resultado))
// .catch(error => console.log(error))


// fetch(url)
// .then(resultado => console.log(resultado))
// .catch(error => console.log(error))

// let sumar = function(x, y) {
//     return new Promise((resolve,reject) => {
//       let sum = x + y;
//       if (sum) {
//         resolve(sum);
//       }
//       else {
//         reject(Error("No se pudo realizar la suma!"));
//       }
//     });
//   };

//   let resta = function(x, y) {
//     return new Promise((resolve,reject) => {
//       var sum = x - y;
//       if (sum) {
//         resolve(sum);
//       }
//       else {
//         reject(Error("No se pudo realizar la resta!"));
//       }
//     });
//   };

// sumar(2,2)
// .then(result1 => {
//     return resta(result1, 3)
// })
// .then(result2 => {
//     return sumar(result2, 5)
// })
// .then(result3 => {
//     return result3 * 2
// })
// .then(result => {
//     return console.log(result)
// })




const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('se resolvio!')
    }, 2000);
})


const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('se resolvio!')
    }, 2000);
})

const promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('se resolvio!')
    }, 2000);
})

Promise.all([promesa1, promesa2, promesa3])
.then(result => {
        console.log(result)
    })
.catch(error => {
    console.log(error)
})



