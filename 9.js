/*
Дан двухмерный массив 7×7. Найти сумму модулей отрицательных
нечетных элементов.
*/

let arr = [];
for (let i = 0; i < 7; i++) {
    arr.push([])
  for (let j = 0; j < 7; j++) {
        arr[i][j]= Math.floor(Math.random()*25-10)
  }
}
arr
let sum=0;
for (let k = 0; k < 7; k++) {
  for (let l = 0; l < 7; l++) {
    if ( arr[k][l] < 0 && arr[k][l]%2 != 0 ) {
      sum += arr[k][l]
    }
  }
}
console.log(sum);
