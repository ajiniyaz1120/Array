/*
Дана матрица N×M, состоящая из натуральных чисел. Выбрать в строках
самые левые наименьшие элементы и поставить их в первый столбец.
*/

let array = [
    [2,3,4,1,9],
    [8,7,6,5,4],
    [9,7,5,2,8],
    [4,3,6,7,5]
],
 min = 0, arraySec = [];
for (let i = 0; i < array.length; i++) {
    min = array[i][0]
    for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] < min) {
           min = array[i][j];
        }
    }    
    arraySec.push(min)
}

for (let k = 0; k < array.length; k++) {
    for (let m = 0; m < array.length; m++) {
        array[k][0] = arraySec[k]        
    }    
}
console.log(array);