// Data
document.querySelector('#horario')
let hora = new Date();
console.log(hora)

document.querySelector('#horario h1')

horario.innerHTML = `${hora.toLocaleString()}`

let data = new Date()

console.log(data.toGMTString())

