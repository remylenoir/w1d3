const myObj = {
  age: 27,
  name: "Rémy",
  location: "Berlin",
  hobbies: [{ title: "gym", days: ["Mon"] }]
};

// Access to the value of a key
console.log(myObj.name);

// Check if a key exists present in an array
console.log(myObj.hasOwnProperty("vacation"));
console.log(!!myObj.vacation); // !! turns into a true/false boolean

// Get an array of the keys
console.log(Object.keys(myObj));

// Get an array of the keys: alternative
// for (let key in myObj) {
//   console.log(myObj);
// }

// Get an values of the keys (not used often)
console.log(Object.values(myObj));

// Display a value in an object
// const interest = prompt("What do you want to know about me?");
// console.log(myObj[interest]);

console.log(myObj.hobbies[0].title);
