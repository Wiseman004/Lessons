// Перевірка наявності властивостей:

function hasProperty(obj, prop) {
    return prop in obj;
}

console.log(hasProperty(user, "name"));
console.log(hasProperty(user, "phone"));

