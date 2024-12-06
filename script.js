// Базові практики:

const user = {
    name: "Dima",
    age: 20,
    isAdmin: true
}

const userBefore = {...user} // Зберігаємо копію до змін

user.email = "dimap@gmail.com"; //Додай до об'єкта нову властивість "email" зі значенням електронної пошти користувача.

user.age += 1 // Онови значення властивості "age", додавши 1 рік до поточного віку.

delete user.isAdmin // Видали властивість "isAdmin" з об'єкта.

// Виведи в консоль об'єкт "user" до та після внесення змін.

console.log(userBefore);
console.log(user);

// Перевірка наявності властивостей:

function hasProperty(obj, prop) {
    return prop in obj;
}

console.log(hasProperty(user, "name"));
console.log(hasProperty(user, "phone"));

// Перевірка методів перебору властивостей:

const userOne = {
    name: 'John',
    age: 25,
    isAdmin: true
}

// Використай цикл для перебору всіх властивостей об'єкта "user". Виведи у консоль кожну пару "ключ: значення”

for (const key in userOne) {
    console.log(`${key}: ${userOne[key]}`);
    }

//Отримай масив ключів об'єкта.  Виведи цей масив у консоль.

console.log(Object.keys(userOne));

//Отримай масив значень об'єкта. Виведіть цей масив у консоль.

console.log(Object.values(userOne));

//Отримай масив пар [ключ, значення]. Виведи цей масив у консоль.

console.log(Object.entries(userOne));

// Напиши функцію "printObjectProps(obj)", яка приймає об'єкт як аргумент і виводить у консоль всі його властивості у форматі "ключ: значення".

function printObjectProps(obj) {
    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
        }
}

printObjectProps(user);

// Завдання 

const userTwo = {
    name: "Ivan",
    age: 25,
    hobbies: ["football", "coding"]
}

//Заморозь об’єкт за допомогою Object.freeze()
 
Object.freeze(userTwo);

// Напиши функцію modifyUser, яка спробує:
// Змінити значення властивості name на "Oleh";
// Додати нову властивість gender зі значенням "male";
// Видалити властивість age.

function modifyUser(userTwo) {
    userTwo.name = "Oleh";
    userTwo.gender = "male";
    delete userTwo.age;
    console.log(userTwo);
}

modifyUser(userTwo);

console.log(userTwo);
// Опиши результат який вийшов

// Нічого не зміниться, бо Object.freeze() робить об'єкт незмінним. не можна додати, видалити чи заміти щось.

// Завдання:

//Створіть об’єкт car з такими властивостями:

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
} 

Object.seal(car);

function updateCar(car) {
    car.year = 2023;
    car.color = "red"
    delete car.model;
    console.log(car);
}

updateCar(car);

console.log(car);

// Виклич цю функцію і перевірте, які зміни були застосовані. Опиши результат чому так

// Object.seal() не дозволяє додавати чи видаляти нові властивості, але може змінювати вже існуючі.

// Завдання:

// Створи функцію isObject яка буде повертати true/false в залежості від пераметру

function  isObject(value){
    return typeof value === "object" && !Array.isArray(value) && value !== null ? true : false;
}

console.log(isObject({})); // true 
console.log(isObject([])); // false 
console.log(isObject(null)); // false 
console.log(isObject(42)); // false 
console.log(isObject("Hello")); // false 
console.log(isObject(() => {})); // false 
console.log(isObject(new Date())); // true 
console.log(isObject(Object.create(null))); // true
