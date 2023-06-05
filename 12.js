/*
Дана целочисленная матрица А[n,m]. Посчитать количество элементов
матрицы, превосходящих среднее арифметическое значение элементов
матрицы. Принять n=4, m=5.
*/

let array = [];

let n = 5;  //Введите размерность матрицы: 
let m = 4;  //Введите количество строк в матрице:
let multiply = n*m

for (let i = 0; i < n; i++) {
  array.push([]);
  for (let j = 0; j < m; j++) {
    array[i][j] = Math.floor(Math.random() * 20); //матрица А[n,m]
  }
}

let sum = 0;
for (let k = 0; k < array.length; k++) {
  // sum += array[k].reduce((a,b)=>a+b)
  sum += array[k].reduce((sum, current) => sum + current, 0);
}

let arvg = Math.floor(sum / multiply)
let largeNumbers = [];

for (let m = 0; m < array.length; m++) {
  for (let l = 0; l < array.length; l++) {
    if (array[m][l]>arvg) {
      largeNumbers.push(array[m][l])
    }    
  }  
}

console.log(`превосходящих среднее арифметическое значение элементов: ${largeNumbers}, среднее арифметическое: ${arvg}`);
