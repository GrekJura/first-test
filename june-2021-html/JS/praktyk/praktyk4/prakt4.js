// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }

}
let arr = [];
arr=[
  new Client(1,'ivan','zhuk','zhuk@ukr.com',+380566445,['яблуко','персик','виноград']),
  new Client(7,'yura','kit','kit@ukr.com',+380566445,['яблуко','персик','виноград','морква']),
  new Client(5,'vasyl','rak','rak@ukr.com',+380566443,['яблуко','персик']),
  new Client(11,'kolya','huk','huk@ukr.com',+380566545,['яблуко','персик','виноград','рис','огірок']),
  new Client(55,'katya','lex','lex@ukr.com',+380562445,['яблуко','персик','виноград','помідор','кавун','диня']),
  new Client(8,'anna','lot','lot@ukr.com',+380566462,['яблуко']),
  new Client(44,'ira','rew','rew@ukr.com',+380576445,['яблуко','персик','виноград','помідор','кавун','диня','перець']),
  new Client(33,'oxana','zhuk','zhuk@ukr.com',+380766445,['яблуко','персик','виноград','помідор','кавун','диня','перець','часник']),
  new Client(32,'misha','tuk','tuk@ukr.com',+380566445,['яблуко','персик','виноград']),
  new Client(2,'olya','tik','tik@ukr.com',+380566435,['яблуко','персик','виноград']),
];
console.log(arr);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

