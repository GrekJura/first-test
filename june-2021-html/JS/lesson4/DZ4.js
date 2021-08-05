//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.


// let arr = [];
// for (let i=0, t=101; i<t; i++) {
//     arr.push(Math.floor(Math.random() * t))
// }
// console.log(arr);


// function generateArray() {
//     let arr=[];
//     for (let i=0; i<10; i++) {
//         arr.push(Math.floor(Math.random() * 100))
//     }
//     return arr
// }
//
// ----------------------------------------------------


// let arr1 = generateArray();
// console.log(arr1);


//- Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

// function generateArrayByLimit(limit) {
//     let arr=[];
//     for (let i=0; i<limit; i++) {
//         arr.push(Math.floor(Math.random() * 100))
//     }
//     return arr
// }
//
// // let arr2 = generateArrayByLimit(45);
// // console.log(arr2);
// -----------------------------------------------



//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let masyv = generateArrayByLimit(5);
// console.log(masyv)
//
// let sorted = masyv.sort(function (el1,el2) {
//     return el1-el2;
// })
// console.log(sorted);
// ---------------------------------------------------
//
//
//
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
// let arr7 = generateArrayByLimit(8);
// console.log(arr7)
//
// let filtered = arr7.filter(function (el,i) {
//     return el % 2 === 0;;
// })
// console.log(filtered);
//-------------------------------------------------------
//
//
//
//
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
// let arr5 = generateArrayByLimit(7);
//
// let stringfide = arr5.map(function (el) {
//     return el.toString()
//     // return el + ''
// })
// console.log(stringfide);
// --------------------------------

//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)
//Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
//
// class User {
//     constructor(id, name, surname , email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
//     getName() {
//         return this.name
//     }
// }
//
// class Admin extends User {
//     constructor(id, name, surname , email, phone, roots) {
//         super(id, name, surname , email, phone)
//         this.roots = roots;
//         this.getName()
//     }
// }
//
//
// class SuperAdmin extends Admin {
//     constructor(id, name, surname , email, phone, roots, god) {
//         super(id, name, surname , email, phone, roots);
//         this.god = god;
//     }
//
// }



function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

    this.getName = function () {
        return this.name;
    }

}


let arr = [];
arr = [
    new User(1,'ivan','zhuk','zhuk@ukr.com',+380566445),
    new User(7,'yura','kit','kit@ukr.com',+380566445),
    new User(5,'vasyl','rak','rak@ukr.com',+380566443),
    new User(11,'kolya','huk','huk@ukr.com',+380566545),
    new User(55,'katya','lex','lex@ukr.com',+380562445),
    new User(8,'anna','lot','lot@ukr.com',+380566462),
    new User(44,'ira','rew','rew@ukr.com',+380576445),
    new User(33,'oxana','zhuk','zhuk@ukr.com',+380766445),
    new User(32,'misha','tuk','tuk@ukr.com',+380566445),
    new User(2,'olya','tik','tik@ukr.com',+380566435),
];

console.log(arr);

let filtered = arr.filter(function (user,i){
    return user.id % 2 === 0;
})

console.log(filtered)

let sorted = arr.map((el) => {
   let obj = new User(el.id, el.name, el.surname , el.email, el.phone);
    obj.name = 4564654654;
  return obj;
}).sort(function (user1,user2){
    return user1.id-user2.id;
})


console.log(sorted)











