// 1

const arr = [1, 2, 3];

const fruits = new Array("Banana", "Apple", "Kiwi", "Orange", "Pomelo")

console.log(arr[0]);
console.log(fruits[fruits.length - 1]);

fruits[1] = "Lemon"

// 2

// git branch -m main day-1
// git fetch origin
// git branch -u origin/day-1 day-1
// git remote set-head origin -a

const array = new Array()


for (let i = 0; i <= 9; i++) {
  array.push(i);
}

for (let i = 0; i <= array.length; i++) {
  console.log(array[i]);
}

for (let num in array) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

let sum = 0;

array.forEach(element => {
  sum += element;
});

console.log(sum);

const numbers = []

for (const number of array) {
  numbers.push(number ** 2);
}

console.log(numbers);

const arrayPairs = []

for (let num in numbers) {
  if (num % 2 === 0) {
    arrayPairs.push(num);
  }
}

console.log(arrayPairs);

// 3

const colors = ["blue", "red", "green", "pink"]

let [blueColor, redColor] = colors;

console.log(blueColor);
console.log(redColor);

const person = {
  name: "Андрій",
  age: 25,
  city: "Київ",
  hobby: "малювання"
};

const {
  name,
  city,
  proffesion = "Немає даних",
  ...rest
} = person

const user = {
  username: "tech_guru",
  email: "guru@example.com",
  address: {
    street: "Шевченка 15",
    cityUser: "Львів"
  }
};

const {
  username,
  email,
  address: {
    street,
    cityUser
  }
} = user

console.log(cityUser);
console.log(email);
console.log(username);

// 4

const numbersOne = [1, 2, 3, 4, 5];

const numbersCopy = [...numbersOne]

numbersCopy.push(6)

console.log(numbersOne);

const additionalNumbers = [6,7,8,9,10]

const allNumbers = [...numbersOne, ...additionalNumbers]

console.log(allNumbers);


const personOne = {
  name: "Олена",
  age: 30,
  city: "Одеса"
};

const updatedPerson = {...personOne}

updatedPerson.city = "Київ";

updatedPerson.profession = "інженер";

console.log(updatedPerson);

function sumNum (...number) {
  return number.reduce((arr1, arr2) => arr1 + arr2, 0);
}

console.log(sumNum(...allNumbers));

function mergeObjects(obj1, obj2){
  return [...obj1, ...obj2]
}


