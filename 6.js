/*
Задан целочисленный массив. Определить, образуют ли значения его
элементов арифметическую прогрессию. Если «да» – вывести разность
прогрессии, если «нет» – ответ «не образуют».
*/


function isArithmeticProgression(array) {
    if (array.length <= 2) {
      return true; // Массив с двумя или менее элементами всегда образует прогрессию
    }
  
    var difference = array[1] - array[0]; // Разность прогрессии
    for (var i = 2; i < array.length; i++) {
      if (array[i] - array[i - 1] !== difference) {
        return false; 
      }
    }
  
    return difference; 
  }
  
  // Пример использования функции:
  var array1 = [1, 3, 5, 7, 9]; //2
  var array2 = [1, 2, 4, 8, 16]; // 0
  
  var difference1 = isArithmeticProgression(array1);
  var difference2 = isArithmeticProgression(array2);
  
  if (difference1) {
    console.log("Массив образует арифметическую прогрессию с разностью " + difference1);
  } else {
    console.log("Массив не образует арифметическую прогрессию");
  }
  
  if (difference2) {
    console.log("Массив образует арифметическую прогрессию с разностью " + difference2);
  } else {  
    console.log("Массив не образует арифметическую прогрессию");
  }