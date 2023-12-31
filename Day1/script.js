 /*
 var name = "abhay";
 let age = 23;
 const hobby = "programing"


 var firstName;  // declearing 

 firstName = 'Vivek'; // assiging a value 

 firstName = 'Aniket'; // re-assigning a value 

 console.log(firstName); // reading or accessing the vlaue

 var firstName = 'Alipa'; // re-declaring the varibale

 console.log(firstName);
*/
//  -----------------
/*
var x ; // x is emtpy / absence of value / undefined 
console.log(typeof x);
x = true;
console.log(typeof x);

// null => empty values 
// undefined => absence of a value 

var x , y, z;
x = null;
console.log(typeof x); // when we check type of null => object 
y = 'M';
z = '21';
*/
// ---------------------------------------------------------------
/*
var student1 ={
    firstName: "sourabh",
    lastName : "Burman",
    age: 20
};

var student2 = {
    firstName: 'Abhay',
    lastName:'gaikwad',
    age: 23
};

student1["fevSubject"] = "JavaScript";
student1.hobby = "Photography";

console.log(student1);
console.log(student1.lastName);
console.log(student1["lastName"]);
*/

// declare a varibale call employee;
// employee should be an object with following key values;
// fName: 'Vivek'
// lName: 'Agrwal'
// age : 40
// lovesJs: true
// console.log employee
// add another property called hobbies using [] notion 
// add another property called favSport using .notion

// var employee = {
//     fName: 'Vivek',
//     lName: 'Agrwal',
//     age : 40,
//     loveJs: true
// }
// console.log(employee);
// employee["hobbies"] = "swimming";
// employee.favSport = "Cricket";
// console.log(employee);

// ---------------------------------------------------------------------------

// function 

// declaring the function 
// function greet(a,b){
//     // do something 
//     var c  = a+b;
//     //return something
//     return c; // if we are not explicitly not returning any thing js will return undefined 
//     // console.log("Greeting!!!!");
// }
// console.log(greet) // if we are not invoking we will getting function 
// var output = greet(4, 6);// invoking the function 
// console.log(output); // 

// function declaration 
// function giveMaxNumber (x, y){
//     if(x > y){
//         return x;
//     }else{
//         return y;
//     }
// }

// var opt = giveMaxNumber(1, 6);
// console.log(opt);

// function expression 
/*var greet = function(a ,b){
    var c = a+ b;
    return c ;
}
console.log(greet(4, 4));

// arrow function expression 
var greet1 = (a, b) =>{
    var c = a+ b;
    return c;
}
console.log(greet1(4, 4));

// function expression 
var opt = (a, b ) => {
    if (a > b){
        return a;
    }else{
        return c 
    }
}
*/
//---------------------------------------------------------------------------

// Arrays 
/*
var smapleArray = [
    "Science", 
    "Maths", 
    "Computers", 
    true, 
    false,
    100, 
    200, 
    undefined,
    null, 
    {name: 'vivel'}, 
    function (){
        console.log("Greetings");
    },
    ["one", "two","three"]

]

console.log(smapleArray.length);


// var student1 = {name: 'Abhay',age: 22}
var student2 = {name: 'Vivek',age: 45}
var student3 = {name: 'Rahul',age: 32}

var students = [student3, student2, student3]
// var students = [{name: 'Abhay',age: 22}, student2, student3]

console.log(students);
console.log(students[2]["age"]);
console.log(students[2].age);
*/

// function getArrayOfColors(c1, c2, c3){
//     return [c1, c2, c3];
// }

// console.log(getArrayOfColors('red', 'blue', 'green'));

// -------------------------------------------------------------------------------------------
// all the values can be classified as truthy or falsey values 
//undefined, null, Nan, 0,  "" empty string  , and false

let x ;
x= [];
x = undefined;
x = false;
x = "";
if(x){
    // if x os truthy this block will exectue
    console.log("x is holding truthy value");
}else{
    // if x is falsey this block will execute
    console.log("x is holding falsey value");
}