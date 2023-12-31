/*let developers_array = [
    {
        first: "John",
        last: "deo", 
        dept: "FE",
        commits: 10
    },
    {
        first: "Jane",
        last: "deo", 
        dept: "BE",
        commits: 15
    },
    {
        first: "James",
        last: "nond", 
        dept: "BE",
        commits: 8
    },
];

// Map() function 
let mapped_array = developers_array.map(function (items){
    return items.first;
})
console.log(mapped_array);

//Filter() function 
let filtered_array = developers_array.filter(function(items){
    return items.dept == "BE";
})
console.log(filtered_array);

//Reduce function 
let reudced_array = developers_array.reduce(function(acc, items){
     items.dept === "BE" ? acc.BE.push(items.first) : acc.FE.push(items.first);
    return acc;
}, 
{FE: [], BE: []});

console.log(reudced_array);
*/

// ---------------------------------------------------------------------------------------
/*
let arr = [1, 2, 3, 4, 5];

arr.push("six"); // add at the end 
console.log(arr);
arr.pop(); // remove form the end
console.log(arr);

arr.shift(); // remove form the top
console.log(arr);
arr.unshift(1); // add at the fornd 
console.log(arr);
*/

// --------------------------
// concat 
/*
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3);

let arr4 = [...arr1, ...arr2];
console.log(arr4);

// --------------------------
// slice 

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let arr5 = arr.slice(2, 6);
console.log(arr5); // let arr = [1, 2, 3, 4, 5];

// --------------------------
// indexof 
let arrindex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 3];

console.log(arrindex.indexOf(3)); // it will give of the index of that item

console.log(arrindex.lastIndexOf(3)); //  

console.log(arrindex.indexOf(9)); // item is not exist 

// --------------------------
// include,  join 

let ar = [1, 2, 3, 4];

console.log(ar.includes(6));
console.log(ar.includes(3));

console.log(ar.join(" "));
console.log(ar.join());
*/

// --------------------------
// splice 

// let arr = [ 0, 1, 2, 3, 4, 5, 6];

// let x = arr.splice(2)
// console.log(arr);

// let x = arr.splice(2, 3);
// console.log(arr);

// let x = arr.splice(2, 3, "two", "three", "four");
// console.log(arr);

// let x = arr.splice(-5, 3, "two", "three", "four");
// console.log(arr);

// let x = arr.splice(2, 3, "two", "three", "four");

// console.log(x); 
// console.log(arr);

// --------------------------------------------------------

// Array Higher order function
/*

// ====================Array.map function=================

let arr1 = [1, 2, 3]; // o/p [2, 4, 6]

let arr2 = arr1.map((item)=>{
    return item * 2;
})
console.log(arr1);
console.log(arr2);
*/

/*
let arr1 = [
    {fistName: "Prity", lastName: "Rastogi"},
    {fistName: "Anjali", lastName: "Soni"},
    {fistName: "Shraddha", lastName: "Gawde"},
];
// o/p  ["Prity Rastogi", "Anjali Soni", "Shraddha Gawde"]

let arr2 = arr1.map((item)=>{
    return `${item.fistName} ${item.lastName}`;
});
console.log(arr2)

let arr3 = arr1.map((item)=>{
    let fname = item.fistName;
    let lname = item.lastName;
    return `${fname} ${lname}`;
});
console.log(arr3);

let arr4 = arr1.map((item)=>{
    let {fname, lname} = item;
    return `${fname} ${lname}`;
});
console.log(arr4);

console.log(arr3)
let arr5 = arr1.map(( {fistName, lastName})=>{
    return `${fistName} ${lastName}`
});
console.log(arr5)
*/

// ====================Array.filter function=================

/*
let arr1 = [
    {fistName: "Prity", rollNumber: 1 },
    {fistName: "Anjali", rollNumber: 2 },
    {fistName: "Shraddha", rollNumber: 3 },
    {fistName: "Nishant", rollNumber: 4 },
    {fistName: "Deepak", rollNumber: 5 },
    {fistName: "Khadim", rollNumber: 6 },
];

//o/p  people with roll number > 3

// let arr1 = [
//     {fistName: "Nishant", rollNumber: 4 },
//     {fistName: "Deepak", rollNumber: 5 },
//     {fistName: "Khadim", rollNumber: 6 },
// ];
let arr21 = arr1.filter((item )=>{
    if(item.rollNumber > 3) {
        return true;
    }
    else {
        return false;
    }
})
console.log(arr21);

let arr2 = arr1.filter((item )=>{
    return item.rollNumber > 3;
})
console.log(arr2);

let arr3 = arr1.filter((item )=>{
    let {rollNumber} = item;
    return rollNumber > 3; 
})
console.log(arr3);

let arr4 = arr1.filter(({rollNumber} )=>{
    return rollNumber > 3; 
})
console.log(arr4);

let arr5 = arr1.filter(({rollNumber} )=> rollNumber > 3); 
console.log(arr5);

let arr6 = arr1.filter((item )=> item.rollNumber > 3);
console.log(arr6);


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2;
// arr2 should e an array 
// it should only contains number less than 6

arr2 = arr1.filter((item)=> item <6);
console.log(arr2);
*/

// ====================Array.Sort function=================

/*
// let arr2 = [1, 30, 4, 500, 6, 799, 8, 9999];
// let xx = arr2.sort();
// console.log(xx);

let arr3 = ["Prity", "Anjali", "Shraddha", "Nishant", "Deepak", "Khadim"];
// let x = arr3.sort(); // it will sort origan array and it will sorting in lexicographically order 
// console.log(x);
// console.log(arr3);

let arr2 = [1, 30, 4, 500, 6, 799, 8, 9999];
let x1 = arr2.sort((a, b)=>{
    // console.log(a, b);
    if(a > b) return 1 // a - b  = positive value 
    if(a < b) return -1 // a - b = negative value 
    return 0; // a - b = equal 
});
console.log(x1);

let x2 = arr2.sort((a, b)=>{
    return a - b;
});
console.log(x2);

let x3 = arr2.sort((a, b)=> a-b);
console.log(x3);


let arr1 = [
    {fistName: "Khadim", rollNumber: 6 },
    {fistName: "Prity", rollNumber: 1 },
    {fistName: "Nishant", rollNumber: 4 },
    {fistName: "Deepak", rollNumber: 5 },
    {fistName: "Shraddha", rollNumber: 3 },
    {fistName: "Anjali", rollNumber: 2 },
];

let x11 = arr1.sort((a, b)=>{
   return a.rollNumber - b.rollNumber;
}) 
console.log(x11);

let x = arr1.sort((a, b)=> a.rollNumber - b.rollNumber);
console.log(x);
*/
// ====================Array.Reduce function=================
 /*
let arr1 = [
    {fistName: "Khadim", scores: 1},
    {fistName: "Prity", scores: 2 },
    {fistName: "Nishant", scores: 5 },
    {fistName: "Deepak", scores: 5 },
    {fistName: "Shraddha", scores: 1 },
    {fistName: "Anjali", scores: 2 },
];

// sum of all the scores 
let x = arr1.reduce((acc , item) => {
    return acc + item.scores ;
},0)
console.log(x);
*/
// -------------------------------------------------------

let prateekMarksData = {
    name: "Prateek",
    subject1: "Javascript",
    subject2: "HTML",
    subject3: "CSS",
    subject4: null,
    subject5: null,
    marks1: 90, 
    marks2: 81,
    marks3: 80,
    marks4: null,
    marks5: null,
  }
  
  let nrupulMarksData = {
    name: "Nrupul",
    subject1: "Java",
    subject2: "Pyton",
    subject3: null,
    subject4: null,
    subject5: null,
    marks1: 95, 
    marks2: 85,
    marks3: null,
    marks4: null,
    marks5: null,
  }
  
  let allStudentsMarksData = [prateekMarksData, nrupulMarksData];
  
  let messagedData = allStudentsMarksData.reduce((acc, item)=>{
    let obj = {};
    obj["name"] = item.name;
    obj["marks"] = [];

    for(let i =1; i<6; i++){
        item[`subject${i}`] && 
        obj["marks"].push({
            subject: item[`subject${i}`], 
            score: item[`marks${i}`],
        });
    }
    acc.push(obj);
    return acc;
  },[])
  console.log(messagedData);
  
  /*
  let massagedData = allStudentsMarksData.reduce((acc, item) => {
    let obj = {};
    obj["name"] = item.name;
    obj["marks"] = [];
    for (let index = 1; index < 6; index++) {
      item[`subject${index}`] &&
        obj["marks"].push({
          subject: item[`subject${index}`],
          score: item[`marks${index}`],
        });
    }
  
    acc.push(obj);
  
    return acc;
  }, []);
  
  console.log(massagedData);
  
  /*
   ------------------------------------------------
   massage the `allStudentsMarksData` to get a new 
   array called `massagedData`
  
   Instead of separate enties for 5 subjects and their marks,
   in the new array, we just have one entry called marks. 
   marks is an array of objects. the objects of marks
   contains subject and score.
   ------------------------------------------------
  
    Expected output from `massagedData`
  
    [
       {
         name: "Prateek", 
         marks: [
           {subject: 'Javascript', score: 90},
           {subject: 'HTML', score: 81},
           {subject: 'CSS', score: 80}
         ]
       },
       {
         name: "Nrupul", 
         marks: [
           {subject: 'Java', score: 95},
           {subject: 'Python', score: 85}
         ]
       },
  
    ]
  
  */
  
  
