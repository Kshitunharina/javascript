let a =12
a=13
a="saavi"
console.log(a)


const b = 12

function checkBlockScope(){
    if(true){
        var student1 = "Enrico"
        var student2 = "Bienve"
      console.log(student1);
      console.log(student2);
    }
     console.log(student1);
      console.log(student2);
}

checkBlockScope()

if(5>1){
    console.log("5 is greater than 1")
}
if(5<1){
    console.log("5 is greater than 1")
}

let age = 12

if(age>18){
    console.log("eligible for giving vote");
}
else if(age<18){
    console.log("not eligible for giving vote in India")
}
else if(age<15){
    console.log("focus in study more")
}
else{
    console.log("enjoy")
}

let num = 1
while (num<=5){
    console.log(num)
    num++
}