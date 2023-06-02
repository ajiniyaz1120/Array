/*
Задан целочисленный массив. Вывести индексы тех элементов, значения
которых больше, чем у стоящих справа от него. Определить количество
таких чисел.
*/

let arr = [1,3,1,5,6,3]
let count = 0
arr.forEach(function(item,i,arr) {
    console.log(`${i}, ${item}`);
    if (item<i) {
        count++
        console.log(`${i}, ${count}`);
    }
});

let array = [9, 8, 2, 1, 3, 4];
let countL = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i]<i) {
        countL++
        console.log(i);
    }    
}
countL