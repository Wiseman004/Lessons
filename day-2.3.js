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
