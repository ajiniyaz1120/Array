/*
В матрице А(4-строки,3-столбца) поменять местами наибольшие элементы в первом и третьем столбцах.
*/

let array = [
  [2, 5, 6],
  [4, 7, 10],
  [9, 9, 8],
  [7, 2, 4],
];
let max = 0
let maxIn = 0
let maxSecond = 0
let maxSecondIn = 0
for (let i = 0; i < array.length; i++) {
  if (array[i][0]>max) {
    max = array[i][0]
    maxIn = i
  }
  if (array[i][2]>maxSecond) {
    maxSecond = array[i][2]
    maxSecondIn = i
  }
}
let temp = array[maxIn][0]
array[maxIn][0]=array[maxSecondIn][2]
array[maxSecondIn][2] = temp
console.log(array);