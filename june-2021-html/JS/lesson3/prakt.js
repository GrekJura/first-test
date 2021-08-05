//- створити функцію яка обчислює та повертає площу прямокутника висотою
function calcRectangleSquare(x, y)
{
    return x * y;
}
//- створити функцію яка обчислює та повертає площу кола
function calcRectangleCircle(r)
    {
    return 3.14*r*r;
    }
    let S=calcRectangleCircle (r=20)
    console.log(S)

  //  - створити функцію яка обчислює та повертає площу циліндру
function calcRectanglCylindr(R,H) {
   return 2*3.14*R*H;
}
let Scylindr=calcRectanglCylindr(R=15,H=25)
console.log(Scylindr)

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function returnMinAndPrintMax(arr) {

    let biggest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i];
        }
    }
    console.log(biggest);

    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}
//- створити функцію яка  створює блок з текстом. Текст задати через аргумент
function Argument(boxing) {
    document.write(`<div>
                   <h1>${boxing}</h1>
                   </div`)
}
Argument('Mike Tyson');

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
/*function element(text) {
  document.write(`<ul>
      <li>${text}</li>
      <li>${text}</li>
      <li>${text}</li>
  </ul>`)
}
element('last elements');

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
*/
function element(text,numOfLi) {
    for (let i = 0; i < numOfLi; i++)
    document.write(`<ul>
      <li>${text}</li>
  </ul>`)
}
element('last elements','3');


//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
