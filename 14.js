/*
Дана целочисленная матрица размера M × N, элементы которой могут принимать значения от 0 до 100. Различные строки матрицы назовем
похожими, если совпадают множества чисел, встречающихся в этих строках. Найти количество строк, похожих на первую строку данной матрицы.
*/

let massiv = [];

for (let i = 0; i < 5; i++) {
  massiv.push([]);
  for (let j = 0; j < 5; j++) {
    massiv[i][j] = Math.floor(Math.random() * 100);
  }
}
massiv;
let row = 0;

for (let j = 1; j < massiv[0].length; j++) {
  let count = 0;
  col = 0;
  col = massiv[j].length;

  for (let k = 0; k < massiv[j].length; k++) {
    for (let l = 0; l < massiv[0].length; l++) {
      if (massiv[j][k] == massiv[0][l]) {
        count++;
      }
    }
  }

  if (count > Math.floor(col / 2)) {
    row++;
  }
}
console.log(
  `Количество строк, похожих на первую строку данной матриц = ${row}`
);
