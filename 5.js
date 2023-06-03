/*
Задан целочисленный массив. Определить разность между суммой
значений элементов массива на участках, где элементы монотонно
возрастают (каждое следующее число больше предыдущего) и суммой
значений элементов массива на участках, где элементы монотонно
убывают (каждое следующее число меньше предыдущего). 

Pútin sanlı massiv berilgen. Jıyındı ortasındaǵı pariqti anıqlań 
elementler monoton bolǵan orınlarda massiv elementleri ma'nislerin 
asırıw (hár bir keyingi nomer aldınǵısınan úlkenlew) hám jıyındı  elementler monoton bolǵan orınlarda massiv elementleri ma'nislerin 
tómenlew (hár bir keyingi nomer aldınǵısınan kemrek).
*/

let arr = [2, 4, 7, 6, 3, 9, 2, 1, 0];
let sum = 0;
let decrease = 0;
let increase = 0;
let result;
for (let i = 0; i < arr.length; i++) {
  if (arr[i - 1] > arr[i]) {
    decrease += arr[i];
  } else {
    increase += arr[i];
  }
}
result = Math.abs(decrease - increase);
result;
