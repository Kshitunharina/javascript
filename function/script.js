//function declaration
function greet() {
  console.log("Hello");
}

greet()

//function expression
var greetMessege = function () {
    console.log("Hi Good Morning")
};

greetMessege()

//function parameters
function add(a,b){
    console.log(a+b)
}

//function invocation and function arguments
add(1,2)

//function return
function substract(a,b){
    return a-b
}
var result = substract(5,2)
console.log(result)


function students(){
    var a=2
}

console.log(a)