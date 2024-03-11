// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Immutability).

// filter() --> filtra el contenido del array según una regla

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0) //% -> te da el resto de una división, si el resto es 0, el numero es par.

console.log(numbers)
console.log(evenNumbers)

// reduce((accumulator, currentValue) => accumulator + currentValue, initialValue) --> reduce el array a un solo valor

const numbersReduce = [1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numbersReduce)
console.log(sum)

//reduce() · case 2

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']

const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log(wordFrecuency)

// Exercise: Passing Grades Average

const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94]

const passingGrades = grades.filter(grade => grade >= 70)

const averagePassingGrade = Math.floor(passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length)

console.log('Origintal grades: ', grades)
console.log('Passing grades: ', passingGrades)
console.log('Average passing grade: ', averagePassingGrade)

