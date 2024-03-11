// Methos that modify the original array

//splice(posicion, cantidad, 'nuevos elementos a añadir')

const vegetables = ['carrot', 'broccoli', 'spinach', 'tomato']
const removedVegetables = vegetables.splice(2,1, 'cucumber', 'onion')

console.log(vegetables)
console.log(removedVegetables)

// reverse()

const numbers = [1, 2, 3, 4, 5]
const reversedNumbers = numbers.reverse()

console.log(numbers)
console.log(reversedNumbers)

// sort() with numbers

const unsortedNumbers1 = [4, 18, 1, 62, 34]
const unicodeSortedNumbers = unsortedNumbers1.sort()

console.log(unsortedNumbers1)
console.log(unicodeSortedNumbers)

const unsortedNumbers2 = [4, 18, 1, 62, 34]
const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b)
// 4 - 18 = -14 4 < 18
//18 - 1 = 17 18 > 1
//etc.. ordena de menor a mayor

console.log(unsortedNumbers2)
console.log(sortedNumbers)

// sort() with strings --> orden de UTF-16

const cities = ['New York', 'Paris', 'Tokyo', 'London']
const sortedCities = cities.sort()

console.log(cities)
console.log(sortedCities)

// fill(nuevo contenido, posicion de inicio de relleno, posicion de fin de relleno) --> cambia los valores del array por algo

const ages = [21, 35, 45, 50]
console.log(ages.fill(0, 2, 4))
console.log(ages.fill(15,1))
console.log(ages.fill(678))