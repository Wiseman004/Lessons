
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
