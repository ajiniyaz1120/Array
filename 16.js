/*
 Дана матрица порядка n×m, все элементы которой различны. В каждой
строке выбирается элемент с наименьшим значением, затем среди этих
чисел выбирается наибольшее.Указать индексы элемента с найденным
значением.
*/

let arr = [
  [2, 3, 4, 5],
  [6, 7, 8, 9],
  [10, 11, 12, 2],
];

let max = 0;
let index = 0; 
for (let i = 0; i < arr.length; i++) {
  let min = arr[i][0];
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] < min) {
      min = arr[i][j];  //ha'r bir qatardag'i minimumlar
    }
  }
  if (max<min) {
    max = min      // minimum ishindegi maksimum element
  }
}
for (let j = 0; j < arr.length; j++) {
  for (let i = 0; i < arr[0].length; i++) {
        if (arr[j][i] == max) {
          index = `индекс максимального значения в пределах минимумов строка : ${j},${i}`
        }
  }  
}
console.log(index);
