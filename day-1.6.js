// Завдання:

// Створи функцію isObject яка буде повертати true/false в залежості від пераметру

function isObject(value) {
    return typeof value === "object" && !Array.isArray(value) && value !== null
}

console.log(isObject({})); // true 
console.log(isObject([])); // false 
console.log(isObject(null)); // false 
console.log(isObject(42)); // false 
console.log(isObject("Hello")); // false 
console.log(isObject(() => {})); // false 
console.log(isObject(new Date())); // true 
console.log(isObject(Object.create(null))); // true


