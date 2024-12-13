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