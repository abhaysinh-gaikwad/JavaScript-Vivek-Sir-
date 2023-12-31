// arrow function 
// let greet = (greeting , name) => ({greet: `${greeting}, from ${name}`});

// console.log(greet("Hello", 'Abhaysinh'));

// // short hand 
// const userData = (name , email )=>({
//     name, 
//     email
// });
// --------------------------------------------------------

// template string 

// let name = 'Vivek'; 
// let temp = 30;
// let city = 'Surat'

// let weather ; 
// if(temp > 25){
//     weather = 'HOT'
// }else{
//     weather = 'COLD'
// }

// function greet(){
//     return "Hello World"
// }
// // Vivek! the temprature at Surat is Hot 
// // Vivek! the temprature at Surat is Cold

// // let greeting = `${name}! the temprature at ${city} is ${weather}`;

// let greeting = `Hello ${false || "Vivek" || 0}`;

// // let greeting = `Hello ${greet()}`;

// console.log(greeting);

// function generateWeaterGreeting(userName, temprature, city){
    
//     // let res =  temprature >= 20 ? 'HOT' : 'COLD';
//     // return `Hey ${userName}! ${city} is ${res} today`;

//     return `Hey ${userName}! ${city} is ${temprature >= 20 ? 'HOT' : 'COLD'} today`;
// }

// console.log(generateWeaterGreeting("Alice", 21, "Miami"));
// console.log(generateWeaterGreeting("Alice", 20, "Los Angeles"));
// console.log(generateWeaterGreeting("Alice", 19, "Seattle"));
// console.log(generateWeaterGreeting("Alice", 18, "Boston"));


//-------------------------------------------------------------------------------------
// function greet(greeting, name){
//     return `${greeting} from ${name}`;
// }

// let greet = (greeting, name) =>{
//     return `${greeting} from ${name}`;
// }

// let greet = (greeting, name) => `${greeting} from ${name}`;

// let greet = name => `Hello, from ${name}`;
// console.log(greet("Abhaysinh"));

// let greet = (name, age) => {name: name, age: age};  // syntax error it will confuse what is the expression or vairbale 
// let greet = (name, age) => ({name: name, age: age});

// let greet = (name, age) => {
//    return{ name: name, age: age}
// };

// object shorthand          
// let greet = (name, age, country = "India") => { // giving default value to county 
//     return{  name, age, country}
// };

//  console.log(greet("Abhaysinh", 40, "India"));
// console.log(greet("Abhaysinh Gaikwad", 20,));
// console.log(greet("Abhaysinh Gaikwad", 20, "USA"));

// console.log(greet("Hello", "Abhaysinh"));

// ---------------------------------------------------------

// //          var and let 
// // var can be accessed before declaration but not lets
// // var can be re-declared but not lets
// // var are function scoped , lets are block scoped 

// function greet(){
//     //block 
//     if(true){ // var are function sco
//         var fistName = "Abhaysinh"  // var is scoped by the function 
//         console.log(fistName);
//     }
//     console.log(fistName);
// }
// // console.log(fistName); // error variable declared by var are scoped only by funcgions by javascript 
// greet();

// function greet(){
//     //block 
//     if(true){
//         let fistName = "Abhaysinh" // let is scoped by every block 
//         console.log(fistName);
//     }
//     // console.log(fistName);
// }
// // console.log(fistName); // error variable declared by var are scoped only by funcgions by javascript 
// greet();

// -------------------------------------------------------------------------------

// // re-assignment vs mutation 

// //declaring a variable called student
// let studnet = {
//     name : "vivek",
//     age : 22
// }

// // mutating student
// studnet.name = "Abhay";

// // mutating student
// studnet["age"] = 22;

// // re-assigning a new value to studnet
// studnet = {
//     name : "Deepak", 
//     age: 21
// }

// ---------------------------------------------------------------------------------
// let vs const

// const behaves exactly same as let,
// but it doesnot allow re-assignment

const config ={
    id: 12344,
}

//mutation 
config["id"] = 999999;

//mutation 
config["key"] = "qw1234!$@";

// re-assignment  we cant re-assing it 
// config = {
//     id : "abhay"
// }

// ---------------------------------------------------------------------------------

//rest
function greet(greeting, n1, n2){
    return `${greeting} form ${n1}, ${n2}`
}

function greet(greeting, ...rest){ // we can use anything rest, users .......
    console.log(greeting);
    console.log(rest);
    return `${greeting} form ${rest.join(", ")}`
}

console.log(greet("Hello", "Vikas", "Raushan", "Deepak", "Anjali"))

// ---------------------------------------------------------------------------------

//spread
// let arr1 = [1, 2,3];
// let arr2 = [6, 7];

// let arr3 = [...arr1, 4, 5, ...arr2, 8,9 ];
// console.log(arr3);

// let obj1 = {
//     name : "Abhay",
// }
// let obj2 ={
//     age : 22,
// }
// let obj3 = {
//     ...obj1,
//     ...obj2
// }
// console.log(obj3);

// ---------------------------------------------------------------------------------
// destructuring array 

let arr = [1, 2, 3, 4, 5];

// access and store first item of the array in variable one
// access and store second item of the array in variable two
// access and store fourth item of the array in variable four

let [one , two,  , four] = arr; 

// let one = arr[0];
// let two = arr[1];
// let four = arr[3];
console.log(one,two,four);  

let student = {
    name : "Shree",
    age: 20, 
    address : {
        city : "Delhi",
        city_type : {
            metro: true,
        },
    },
};

let {
    name :student_name, 
    age: student_age,
    address: {
        city : student_city,
        city_type : {
            metro : city_type
        }
    },

} = student;
// let student_name = student.name;
// let student_age = student.age;
// let student_city = student.address.city;
// let city_type = student.address.city_type.metro;

console.log(student_name, student_age, student_city, city_type);