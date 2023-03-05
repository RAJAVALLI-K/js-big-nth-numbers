let array = [3, 35, -9, 8, 44, 98];
//let n = parseInt(prompt('Enter a nth number'));
function bigNum(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
        console.log(array[i]);
    }
    console.log(array);
    //let result = array[n - 1];
    return array;
}
console.log(bigNum(array));

