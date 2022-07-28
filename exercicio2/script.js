let arrayNumber = [1, 5, 9, 7]
let arrayString = ['pizza', 'polenta', 'salame', 'lasanha']
let arrayTipos = ['Atlhetico vai ganhar', 'do flamengo de', 2, 0, true]

console.log('Numero de elementos da primeira array: ', arrayNumber.length)
console.log('Numero de elementos da segunda array: ', arrayString.length)
console.log('Numero de elementos da terceira array: ', arrayTipos.length)

console.log('Primeiro elemento da primeira array: ', arrayNumber[0])
console.log('Segundo elemento da segunda array: ', arrayString[1])
console.log('Terceiro elemento da terceira array: ', arrayTipos[2])

console.log('Contém 7? ', arrayNumber.includes(7))
console.log('Comtém Flamengo vai ganhar? ', arrayTipos.includes('Flamengo vai ganhar'))