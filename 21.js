/*
Создайте массив int A[5][5] и выведите его на экран следующим образом
1 0 1 0 1
0 1 1 1 0
1 1 0 1 1
0 1 1 1 0
1 0 1 0 1
*/

let array = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (i == j) {
            array[i][j] = 1; //diagonal
        }
        if (i+j == array.length-1) {
            array[i][j] = 1;  // pobochniy diagonal
        }    
        if (j<3 && j>1) {
            array[i][j] = 1;  //centr stolbca
        } 
        if (i<3 && i>1) {
            array[i][j] = 1;  //centr stroka
        }  
        if (i<3 && i>1 && j<3 && j>1) {
            array[i][j] = 0;
        }
    }    
}
console.log(array);