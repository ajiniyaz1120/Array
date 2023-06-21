/*
Дана матрица размера NxM. Столбцы считать похожими, если совпадают
множества чисел, встречающиеся в этих столбцах. Найти количество
столбцов, похожих на последнюю.

NxM matritsasi berilgen. Eger bul baǵanadaǵı nomerler toplamı uyqas kelse, baǵanalar uqsas esaplanadı. Aqırǵısına uqsas baǵanalar sanın tabıń .
*/

// let n = 4;
// let m = 5;

let array = [
  [1, 3, 9, 1, 1],
  [2, 5, 7, 2, 2],
  [3, 6, 5, 3, 3],
  [4, 8, 6, 4, 4],
];
let row = 0;
for (let i = 0; i < array.length; i++) {
  let count = 0;
  let column = array[i].length
  
  for (let j = 0; j < array.length; j++) {
    for (let l = 0; l < array.length; l++) {
      if (array[j][i] == array[l][array.length - 1]) {
        count++;
      }
    }
  }

  if (count>Math.floor(column/2)) {
    row++
  }

}

console.log(
  `Количество столбца, похожих на первую столбца данной матриц: ${row}`
);
