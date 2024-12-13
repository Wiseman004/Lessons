
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

