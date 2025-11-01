let message1 = "hello world";

let upper = message1.toUpperCase();
console.log(upper); // Output: "HELLO WORLD"

let message2 = "HELLO WORLD";
let lower = message2.toLowerCase();
console.log(lower); // Output: "hello world"

let str = "JavaScript is fun";
console.log(str.startsWith("Java"));   // true
console.log(str.startsWith("Script")); // false

let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "Burhan");



// let pattern = /^hello/; // regex to check if string starts with "hello"
// let text = "hello world";
// console.log(pattern.test(text)); // true


// let anotherPattern = /world$/; // ends with "world"
// console.log(anotherPattern.test(text)); // true

//regular expression
let message = "My pin is 1234";
let newMessage = message.replace(/\d/g, "*");

console.log(newMessage); // "My pin is ****"

// /\d/g matches all digits (g = global search)

// .replace() replaces all digits with *

//loop
for (let i = 1; i <= 5; i++) {
  console.log("Hi " + "Burhan"); 
}

//switch 
let fruit = "orange";

switch (fruit) {
  case "apple":
    console.log("Apples are red and sweet!");
    break;
  case "banana":
    console.log("Bananas are yellow and soft!");
    break;
  case "orange":
    console.log("Oranges are juicy!");
    break;
  default:
    console.log("I don't know that fruit.");
}

// Without break, JavaScript will continue to run the next case even if one already matched. This is called "fall-through".

// So we use break; to exit the switch once a match is found.

let a = (Math.random()*10)
console.log(Math.floor(a))
console.log(Math.floor(2.6))

