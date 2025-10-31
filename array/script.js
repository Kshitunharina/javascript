
// var vegetables = ["Carrot", "Broccoli", "Onion", "Potato"]
// console.log(vegetables[0])

// console.log(vegetables.join("; "))
// console.log(vegetables.pop())
// console.log(vegetables)

// vegetables.push("Spinach")
// console.log(vegetables)

// function add(a,b) {
//     return a+b;
// }
// function average(a,b) {
//     return add(a,b)/2;
// }
// let result = average(97,47)
// console.log(result)
var todolist = ["Buy Groceries", "Walk the Dog", "Finish Homework"];

console.log(todolist[0])

todolist.push("Call mom", "Clean Room")
console.log("After adding: " + todolist.join(", "));
todolist.unshift("Pay Your Debt");
console.log("Final list: " + todolist.join(", "));