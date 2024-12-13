// Базові практики:

const user = {
    name: "Dima",
    age: 20,
    isAdmin: true
}

const userBefore = {
    ...user
} // Зберігаємо копію до змін

user.email = "dimap@gmail.com"; //Додай до об'єкта нову властивість "email" зі значенням електронної пошти користувача.

user.age += 1 // Онови значення властивості "age", додавши 1 рік до поточного віку.

delete user.isAdmin // Видали властивість "isAdmin" з об'єкта.

// Виведи в консоль об'єкт "user" до та після внесення змін.

console.log(userBefore);
console.log(user);

