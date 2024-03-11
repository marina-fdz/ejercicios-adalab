// Methods that iterate over an array.
// Methods that DO NOT modify the origintal array (Immutability).

// map()

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squaredNumbers)

// forEach()

const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)

// Exercise: Fahrenheit to Celsius Conversion

const temperaturesInFahrenheit = [32, 68, 95, 105, 212]
const temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit => Math.floor((5/9) * (fahrenheit - 32)))

console.log('Temperatures in Fahrenheit: ', temperaturesInFahrenheit)
console.log('Tempereatures in Celsius: ', temperaturesInCelsius)

// Exercise: Sum of elements in an array

const newNumbers = [1, 2, 3, 4, 5]
let sum = 0

newNumbers.forEach(number => {
    sum += number //sum = sum + number
})

console.log('Array of numbers: ', newNumbers)
console.log('Sum of numbers: ', sum)