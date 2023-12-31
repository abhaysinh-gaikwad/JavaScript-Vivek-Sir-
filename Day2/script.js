// let a = "";
// let b = 'Abhay';
// let c = false;

// let z = a || b|| c;
// console.log(z);

// let a = true;
// let b = 'Abhay';
// let c = false;

// let z = a && b && c ;
// console.log(z);

// ------------------------------------------
// let x = 1;
// let y = "1";
// console.log(x==y); // it will check for the
// console.log(x!=y);


// console.log(x===y); // it will check for type first if it is not same it will return false not check for the value 
// console.log(x!==y);

// function isEqual(value1, value2, isStrict){
//     if(isStrict){
//         return value1 === value2;
//     }else{
//         return value1 == value2;
//     }
// }
// console.log(isEqual(1, "1", false));
// console.log(isEqual(1, "1", true));

// function isEqual(value1, value2){
//     // let s1 = value1.toLowerCase();
//     // let s2 = value2.toLowerCase();
//     return value1.toLowerCase() == value2.toLowerCase();
//     // return s1==s2 ? true : false;
// }
// console.log(isEqual("Masai", "Masai"));//true
// console.log(isEqual("Masai", "masai"));//true
// console.log(isEqual("Masai", "MasaiXYX")); //false


// let x = true; 
// let y = false;
// let z = 500;

// console.log(x || (y && 500));

//----------------------------------------------------------------


// // function / expression  does two things 
// // ->do something 
// // ->return something
// let a  = 5;
// let b = 7;
// a++; // post-increment 
// // doing -> a is immidiately incremented by 1
// // return the old vlaue of a is retruend
// console.log(a); //6 

// ++b; // pre-increment
// // doing -> b is immidiately incremented by 1
// // return the new vlaue of b is retruend
// console.log(b); // 8

// let c = 9;
// console.log(c++);
// console.log(c);

// let d = 15;
// console.log(++d);
// console.log(d)

//-------------------------------------------------------------------------

// Type Conversoin 

// let num = 1; 
// let bool = true; 
// let str = "Vivek";
// let arr = [1, 2, 3];
// let obj = {name: "Vivek"}; // we will not convert object into String 

// let numb = '10px';

// console.log(Number(numb));
// console.log(parseInt(numb));

// let numbe = 'px10';
// console.log(parseInt(numbe));


// +  numric additoion / String concatination 
// console.log(3+2);//number 5
// console.log("3"+2+2); // string 322
// console.log(3+"2"); // string 32


// console.log(5-2);//
// console.log("5"-2); // 
// console.log(5-"2px"); // 
// console.log(5-Number("2px"));

// console.log("0"== false);
// console.log("0"==true);
// console.log("true"==true);

// let ageInput = "40";
// // let incrementAge  = Number(ageInput) + 1;
// let incrementAge = +ageInput + 1;
// console.log(incrementAge);


// let value1 = "8"
// let value2 = "4444"
// let result = value1 > value2; //when two strings are compare it will check lexicographically order 
// console.log(result);

// let isStudent = true; 
// let isTeacher = false;

// let res = isStudent + isTeacher;  //1 + 0
// console.log(res);

//---------------------------------------------------------------------

// let x; 

// x = [];
// console.log(Array.isArray(x));

// x = null;
// console.log(x ==null);

// x = {};
// console.log(typeof x == "object" && !Array.isArray(x) && x!==null)

// let x; 
// x = 1;
// console.log(!x);

// -----------------------------------------------------------------------------

// function isArray (value){

//     return Array.isArray(value);
// }

// console.log(isArray([]));
// console.log(isArray({}));
// console.log(isArray(null));
// console.log(isArray(1));


// -----------------------------------------------------------------------------

// function isNullOrUndefined (value){
//     return value == null || value == undefined;
// }
// console.log(isNullOrUndefined(null));
// console.log(isNullOrUndefined(undefined));
// console.log(isNullOrUndefined(0));
// console.log(isNullOrUndefined(""));


// -----------------------------------------------------------------------------

function processInput(input){
   if(typeof input == 'string')return input.toUpperCase();

   else if(typeof input == 'number') return input * 2;
   
   else if(Array.isArray(input)) return input.length;

   else if(input == null || input == undefined) return 0;
   
   else return input;
}

console.log(processInput('hello'));
console.log(processInput(10));
console.log(processInput([1,2,3]));
console.log(processInput(null));
console.log(processInput(undefined));
console.log(processInput({key: 'value'}));


