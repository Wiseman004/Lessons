// Перевірка методів перебору властивостей:

const userOne = {
    name: 'John',
    age: 25,
    isAdmin: true
}

// Використай цикл для перебору всіх властивостей об'єкта "user". Виведи у консоль кожну пару "ключ: значення”

for (const key in userOne) {
    console.log(key + ":" + userOne[key]);
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
