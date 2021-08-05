// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let nums =[125,345,100500,-587,+267];
console.log(nums)

let strings=['js','phyton','html','css','angular'];
console.log(strings);

let bools=[true,125,'js',false,'css'];
console.log(bools);



//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let array=[]
array [0] = 'gddg'
console.log(array);

for (let i = 0; i < 10; i++) {

   document.write(`<div>hello</div>`)
}

for (let i = 1; i < 10; i++) {
   document.write(`<div>${[i]} hello</div>`)

}
let a=0;

while (a<20)
{
   document.write(`<h1>hello my little friend </h1>`)
   a++
}
let i=0;
while (i<20)
{
   document.write(`<h1>${[i]} hello my little friend </h1>`)
   i++
}
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let xArrays=[1,2,3,4,5,6,7,8,9,10];
for (const number of xArrays) {
   console.log(number);
}
let xStrings=['html','css','NodJS','js','hello','wid','hey','vs','clon','sdd']
for (const xString of xStrings) {
   console.log(xString);

}
let xMasivs=['html','css','NodJS','js',2,3,4,5,true]
for (const xMasiv of xMasivs) {
   console.log(xMasiv);
}
let yMasivs=['html','css','NodJS','js',2,false,4,5,true]
for (const yMasiv of yMasivs) {
   if (typeof yMasiv==='boolean')
      console.log(yMasiv)
   }
let rMasivs=['html','css','NodJS','js',2,false,4,5,true]
for (const rMasiv of rMasivs) {
   if (typeof rMasiv==='number')
      console.log(rMasiv)
}
let vMasivs=['html','css','NodJS','js',2,false,4,5,true]
for (const vMasiv of vMasivs) {
   if (typeof vMasiv==='string')
      console.log(vMasiv)
}
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//

//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]