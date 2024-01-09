// function createUsers (firstName , lastName) {
//     let users={};
//     users.firstName = firstName;
//     users.lastName = lastName ;

//     users.sayFullName = function(){
//         console.log(firstName, lastName);
//     }
//     return users;
// }

// let user1 = createUsers('Abhaysinh', 'Gaikwad');
// console.log(user1);
// user1.sayFullName();

// let user2 = createUsers('Vivek', 'Agarwal');
// console.log(user2);

// function createUsers (firstName , lastName) {
//     // let users={};
//     this.firstName = firstName;
//     this.lastName = lastName ;

//     this.sayFullName = function(){
//         console.log(firstName, lastName);
//     }
//     // return users;
// }
// let user1 = new createUsers('Abhaysinh', 'Gaikwad');
// console.log(user1);
// console.log(user1.constructor);
// user1.sayFullName();

// let user2 = new createUsers('Vivek', 'Agarwal');
// console.log(user2);
// console.log(user2.constructor);

// =====================================================================================

// let ip1 = {
//     color: "Black",
//     display: "90nm",
//     dile: function(){
//         console.log("tring.... tring...")
//     },
//     sendMessages: function(){
//         console.log("Sending Message...")
//     }
// }
// ip1.dile()

// let ip2 = {
//     color: "Black",
//     display: "90nm",
//     dile: function(){
//         console.log("tring.... tring...")
//     },
//     sendMessages: function(){
//         console.log("Sending Message...")
//     }
// }

//factory function
class IPhone1 {
  greeting = "Hello";
  constructor(color, display) {
    this.color = color;
    this.display = display;
  }
  dile() {
    console.log(`${this.greeting}! tring... tring...`);
  }
  sendMessages() {
    console.log("Sending Message...");
  }
}
// function IPhone1 (color, display){
//     // let obj = {};
//     this.color = color;
//     this.display = display;
//     this.dile = function(){
//         console.log("tring... tring...");
//     }
//     this.sendMessages = function(){
//         console.log("Sending Message...")
//     }
//     // return obj;
// }
// let iP1 = new IPhone1("red", "75nm");
// console.log(iP1);
// iP1.dile();
// iP1.sendMessages();

class Animal {
  constructor(noOflegs, vegetarian) {
    this.noOflegs = noOflegs;
    this.vegetarian = vegetarian;
  }
  eat() {
    console.log("eating....");
  }
  greet() {
    console.log(`Hi, i have ${this.noOflegs} legs.`);
  }
}

// let a1 = new Animal(4, true);
// a1.eat();
// a1.greet();

// let a2 = animal(2, false);
// a2.eat();
// a2.greet();

// let a3 = animal(4, false);
// a3.greet();
// a3.eat();

// function creatCat(name , power){
//     let obj = {};
//     obj.tom = name;
//     obj.displayPower = function(){
//         console.log(`${name}: ${power}`)
//     }
//     return obj;
// }

// let tom = creatCat('Tom', 100);
// tom.displayPower();

class CreateCat {
  constructor (name, power) {
    this.name = name;
    this.power = power;
  }
 displayPower () {
    return `${this.name}: ${this.power}`;
  };
}
// a mouse object has a property called name<string>
// method: kick(catObject) -> when a mouse kicks a cat, cats power reduces by 10
class CreateMouse{
  constructor (name) {
    this.name = name;
    // implement the kick method here; it should take in a cat object.
  }
  kick(cat) {
    cat.power -= 10;
  };
}

// example invocation
let tom = new CreateCat("Tom", 100);
let jerry = new CreateMouse("Jerry");

// console.log(tom.displayPower()); // Tom: 100
// jerry.kick(tom);
// console.log(tom.displayPower()); // Tom: 90
// jerry.kick(tom);
// console.log(tom.displayPower()); // Tom: 80

// console.log(tom);
// console.log(jerry);

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log("Hello!");
  }
  static move(){
    console.log('Move');
  }
}
// console.log(Person.greet);
// Person.greet();
Person.move(); // static function 

let p = new Person();
p.greet(); // instance methods 

class 