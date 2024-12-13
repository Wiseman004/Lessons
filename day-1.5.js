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

