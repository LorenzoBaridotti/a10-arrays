let arrayNumber = [1, 5, 9, 7]
let arrayString = ['pizza', 'polenta', 'salame', 'lasanha']
let arrayTipos = ['Atlhetico vai ganhar', 'do flamengo de', 2, 0, true]

let copiaArrayNumber = arrayNumber.slice()
let copiaArrayString = arrayString.slice()
let copiaArrayTipos = arrayTipos.slice()

copiaArrayNumber.push(6)

console.log(arrayNumber)
console.log(copiaArrayNumber)

copiaArrayString.pop()

console.log(arrayString)
console.log(copiaArrayString)

copiaArrayTipos.splice(1, 1)

console.log(arrayTipos)
console.log(copiaArrayTipos)