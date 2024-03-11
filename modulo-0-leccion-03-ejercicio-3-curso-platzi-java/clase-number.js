// 1. Tipo entero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)

//. Notación científica
const cientifico = 5e3

// 3. Infinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN

// Operaciones aritméticas

// 1. Suma, Resta, Multiplicación y División
const suma = 3 + 4
const resta = 3 - 4 
const multiplicacion = 3 * 4 
const division = 16 / 4

// 2. Módulo y Exponenciación
const modulo = 15 % 8 //para saber si un número es múltiplo de otro
const exponenciacion = 2 ** 3

// Precisión
const resultado = 0.1 + 0.2
console.log(resultado) //saca muchos decimales
console.log(resultado.toFixed(1)) //para que saque solo 1 decimal
console.log(resultado===0.3) //comprobar que el resultado es igual en cantidad y tipo de de dato

// Operaciones avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)
