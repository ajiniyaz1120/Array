/*
15) Дана матрица размера 5×10. Вывести количество столбцов, элементы
которых монотонно убывают
*/

let array = [
    [5,4,6,8,9,7,4,6,5,8],
    [4,3,4,5,4,6,7,5,9,4],
    [3,3,3,5,4,5,7,4,9,4],
    [2,3,2,5,4,4,7,3,9,4],
    [1,3,1,5,4,3,7,2,9,4],
];

let count = 0;

for (let i = 0; i < array[0].length; i++) {
  let monotonno = false;
  for (let j = 1; j < array.length; j++) {
    if (array[j-1][i] > array[j][i]) {
      monotonno = true;
    }else{
        monotonno = false
        break
    }
  }
  if (monotonno) {
    count++;
  }
}
console.log(`количество столбцов: ` + count);
