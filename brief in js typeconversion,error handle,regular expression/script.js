let text1 = "I love apples. Apples are great.";
let result1 = text1.replace(/apples/i, "oranges");
console.log(result1);
// # Only replaces first match unless you add the g flag

let text = "cat bat mat";
let result = text.replace(/at/g, "ow");
console.log(result);
// # /at/g → g flag = global (replace all occurrences)

function add(a, b) {
  return a + b;
}
add = (a, b) => a + b;

var a = "2";
console.log(typeof a);

console.log(typeof Number(a));

var num1 = 1;
var num2 = 2;

console.log(num1 + String(num2));
