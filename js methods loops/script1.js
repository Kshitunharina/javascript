console.log(new Date())
console.log(Math.random());
console.log(Math.floor(14.2))

var student={
    name:"Saavi",
    age:"14",
    rollno:1

}

console.log(student.name)

function func1(a, b, c) {
  console.log(arguments[0]);
  // Expected output: 1

  console.log(arguments[1]);
  // Expected output: 2

  console.log(arguments[2]);
  // Expected output: 3
}

func1(1, 2, 3);
