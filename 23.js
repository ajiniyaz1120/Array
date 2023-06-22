/*
 Дана квадратная матрица N×N, состоящая из натуральных чисел. Зеркально отразить ее элементы относительно побочной диагонали. Вывести
результат на экран.
*/

let array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for (let i = 0; i < array.length; i++) {
    document.write(array[i] + "<br>")    
}
document.write("<br>")

for (let i = 0; i < array.length-1; i++) {
    for (let j = i; j < array.length-1; j++) {
        let cache = array[i][j];
        array[i][j] = array[array.length - j - 1][array.length - i - 1]
        array[array.length - j - 1][array.length - i - 1] = cache;
    }    
}

for (let i = 0; i < array.length; i++) {
    document.write(array[i] + "<br>")    
}