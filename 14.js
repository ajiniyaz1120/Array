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
massiv
// let sortElement = massiv[0]                                                                            
let count = 0;                                                                                                                                                                                         
for (let k = 1; k < massiv.length; k++) {
    for (let l = 0; l < massiv.length; l++) {
        if (massiv[0][l] === massiv[k][l]) {
            count++     
        }    
    }
}
count
console.log(`Количество строк, похожих на первую строку данной матриц = ${count}`);
