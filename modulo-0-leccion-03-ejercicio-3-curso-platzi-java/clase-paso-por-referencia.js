// Tipo de dato complejo - Paso por referencia

let frutas = {
    naranja: '🍊'
}

let vegetales = frutas
vegetales.naranja = '🥦'
console.log(frutas)

let ropa = {
    blusa: '👚'
}

ropa.pantalon = '👖'
console.log(ropa)

// Garbage recollection --> java quita lo que no necesitamos ya en nuestro código

