/*
Сформируйте массив L(I,J) с помощью датчика случайных чисел. Увеличить каждый элемент массива в 3 раза и поменяйте знак на противоположный. Массив выведите на экран в виде таблицы
*/

let array = [];

for (let i = 0; i < 3; i++) {
  array.push([]);
  for (let j = 0; j < 3; j++) {
    array[i][j] = Math.floor(Math.random() * 15 + 1);
    document.write(` ${array[i][j]} | `);
  }
}
// document.write(array)

for (let l = 0; l < array.length; l++) {
  for (let m = 0; m < array.length; m++) {
    array[l][m] = array[l][m] * -3;
  }
}
document.write(`<br>${array}`);
