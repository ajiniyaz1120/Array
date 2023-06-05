
// let n = Number(prompt("Введите размерность матрицы: "))
// let m = Number(prompt("Введите количество строк в матрице: "))
let n = 5
let m = 4
let arr = new Array(n);
for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
}

let sum = 0;
let count = 0;

for (let j = 0; j < m; j++) {
    for (let i = 0; i < n; i++) {
        arr[i][j] = Math.floor(Math.random()*100)        
    }    
}

for (let k = 0; k < n; k++) {
    sum += arr[k].reduce((a,b)=>a+b);
    count++    
}

sum = sum / count
for (let l = 0; l < m; l++) {
    for (let m = 0; m < n; m++) {
        if (arr[m][l]>sum) {
            count++
        }
    }    
}

console.log(`Количество элементов, превышающих среднее арифметическое: ${count}`);