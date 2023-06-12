/*
Дано число n и квадратный массив int A[n][n]. Проверьте, является ли
массив симметричным относительно главной диагонали.
0 1 2
1 2 3
2 3 4
*/

let array = [
  [0, 1, 2],
  [1, 2, 3],
  [2, 3, 4],
];

let symmetrical;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[i][j] !== array[j][i]) {
      symmetrical = false;
    }
  }
}

if (symmetrical == false) {
    console.log("не симметричным");
}else{
    console.log("симметричным");
}