/*
Дан двухмерный массив, содержащий 8 строк и 8 столбцов. Элементами
массива являются целые числа. Упорядочить массив по возрастанию
элементов побочной диагонали.

8 qatar hám 8 ústinnen ibarat eki ólshemli massiv berilgen. 
Massivtiń elementleri pútin sanlar bolıp tabıladı. 
Massivti ekilemshi diyaganal elementleriniń ósiw tártibinde tártipleń.
*/

let n = 8; m = 8;
let array = [];

for (let i = 0; i < n; i++) {
    array.push([])
    for (let j = 0; j < m; j++) {
        array[i][j] = Math.floor(Math.random()*10)
    }
}

let array2 = [];
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i + j == array.length-1) {
      array2.push(array[i][j]);
    }
  }
}

for (let s = 0; s < array2.length; s++) {
  array2.sort((a, b) => a - b);
}

for (let k = 0; k < array.length; k++) {
  for (let l = 0; l < array.length; l++) {
    if (k + l == array.length-1) {
      array[k][l] = array2[l];
    }
  }
}

console.log(array);