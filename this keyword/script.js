//this keyword
const student = {
  name: "Burhanuddin",
  grade: 6,
  showInfo: function() {
    console.log("Name: " + this.name);  
    console.log("Grade: " + this.grade);
  }
};

student.showInfo();
// Explanation:
// Inside showInfo(), using this.name means “the name of the object that’s calling me.”

//class
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  showDetails() {
    console.log(`Car: ${this.brand}, Color: ${this.color}`);
  }
}

const car1 = new Car("Toyota", "Red");
car1.showDetails();

//inheritance
class Animal {
  speak() {
    console.log("This animal makes a sound.");
  }
}

class Dog extends Animal {
  bark() {
    console.log("The dog barks.");
  }
}

const myDog = new Dog();
myDog.speak();  // from parent class
myDog.bark();   // from child class

//static method

class MathTools {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathTools.add(5, 7)); // using the class directly
