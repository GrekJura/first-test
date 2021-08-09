//- створити функцію яка приймає масив та виводить його
let array= [2,33,4]
function masiv(arr) {
    for (const element of arr) {
        console.log(element);
    }
}
masiv(array)
//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function Min (a, b, c) {
    let min = arguments[0];
    for (let i = 0; i > arguments.length; i++) {
        if (arguments[i] < min) {
            min= arguments[i];
        }
    }
    console.log(min);
}
Min(4, 16, 55);


//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function Max (a, b, c) {
    let max = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    console.log(max);
}
Max(4, 16, 55);
//- створити функцію яка повертає найбільше число з масиву
function funcMax (array) {
     let max = array[0];
    for (const funcMaxElement of array) {
        if (funcMaxElement > max) max = funcMaxElement;
     }
     return max;
 };
 let funcMaxReturn = funcMax([2,3,4,5,6,10,4,3,6]);
 console.log(funcMaxReturn);
//- створити функцію яка повертає найменьше число з масиву
function funcMin (array) {
    let min = array[0];
    for (const funcMinElement of array) {
        if (funcMinElement < min) min = funcMinElement;
    }
    return min;
};
let funcMinReturn = funcMin([2,3,4,5,6,10,4,3,6]);
console.log(funcMinReturn);
//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
 function sum() {
     let i = 0;
    for (const arrayElement of array) {
       i += arrayElement;
   }
    return i/array.length;
 };

 let sume = sum([1,2,10])
 console.log(sume);