/*
Дана матрица порядка n×m, все элементы которой различны. В каждой
строке выбирается элемент с наименьшим значением, затем среди этих
чисел выбирается наибольшее.Указать индексы элемента с найденным
значением
*/

let array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [10, 11, 12, 9],
  ],
  min = 0 , indeks = 0 , max = 0;

for (let i = 0; i < array.length; i++) {
    min = array[i][0]
    for (let j = 0; j < array[i].length; j++) {
        if (min > array[i][j]) {
            min = array[i][j]
        }        
    }   
    if (max < min) {
        max = min;
    }
}

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
        if (array[i][j] == max) {
            indeks = `индекс максимального значения в пределах минимумов строка : ${i},${j}`
        }        
    }    
}

console.log(indeks);