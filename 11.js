/*
Дан двухмерный массив 5×6. Определить среднее арифметическое каждого столбца, определить максимум и минимум каждой строки.
*/
let array = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 5, 4],
  [2, 3, 6, 4, 5, 7],
  [3, 2, 1, 4, 5, 6],
  [5, 6, 4, 8, 9, 1],
];

let average = 0,
  sumColumnFirst = 0,
  sumColumnSecond = 0,
  sumColumnThird = 0,
  sumColumnFourth = 0,
  sumColumnFifth = 0,
  sumColumnSixth = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i][0] >= 0) {
    sumColumnFirst += array[i][0]; // сумма каждого столбца
  }
  if (array[i][1] >= 0) {
    sumColumnSecond += array[i][1];
    average = sumColumnFirst / array.length; //Среднее арифметическое столбцов
  }
}
let max = 0;
let min = array[0][0];
for (let j = 0; j < array.length+1; j++) {
  if (array[0][j] > max) {
    max = array[0][j]; //максимум сумма строки
  }
  if (array[0][j]<min) {
    min = array[0][j]  //минимум сумма строки
  }
}
max; // maksimum san
min; // minimum san
console.log(`Среднее арифметическое столбцов: ${average}\n , сумма столбца : ${sumColumnFirst} , максимум сумма строки : ${max} , минимум сумма строки : ${min}`);

