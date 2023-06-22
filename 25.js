/*
 Дан массив А[3][3]. Найти строку, сумма элементов которой минимальна,
и умножить на минимальную сумму каждый элемент матрицы.
*/

let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  minLine = 1000,
  result = 0,
  sum = 0;

let sums = [];
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    sum += array[i][j];
  }
  result = sum;
  sum = 0;
  if (minLine > result) {
    minLine = result
  }
}
minLine

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        array[i][j] = array[i][j] * minLine        
    }    
}
console.log(array);

