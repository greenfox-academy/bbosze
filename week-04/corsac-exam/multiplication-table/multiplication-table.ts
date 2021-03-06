'use strict';

// Create a function that prints the multiplication table of a given base number.
// It should take the base number as a parameter and prints the output to the
// console.
// The output should look like this for 5 as base:
//  1 * 5 = 5
//  2 * 5 = 10
//  3 * 5 = 15
//  4 * 5 = 20
//  5 * 5 = 25
//  6 * 5 = 30
//  7 * 5 = 35
//  8 * 5 = 40
//  9 * 5 = 45
//  10 * 5 = 50

// function multiplicationTable(baseNumber: number) {
//   for (let i: number = 1; i <= 10; i++) {
//     let result: number = i * baseNumber;
//     console.log(`${i} * ${baseNumber} = ${result}`)
//   }
// }

let i:number = 1
let result: number

let multiplicationTableWithRecursionArrowFunction = (baseNumber: number) => {
    i <= 10 ? (result = i * baseNumber,
    console.log(`${i} * ${baseNumber} = ${result}`),
    i++,
    multiplicationTableWithRecursion(baseNumber))
    : null
  }

function multiplicationTableWithRecursion(baseNumber: number) {
    i <= 10 ? (result = i * baseNumber,
    console.log(`${i} * ${baseNumber} = ${result}`),
    i++,
    multiplicationTableWithRecursion(baseNumber))
    : null
  }


multiplicationTableWithRecursionArrowFunction(5);
