// let x = new Promise (function(resolve, reject){

// });
// console.log(x);

// let y = new Promise(function(){});
// console.log(y);

/*
// getSqRt should return a promis and not a value 
// if we invoke geqSqRt with a +ve number it should resolve
// if we invoke getSqRt with a -ve number it should reject 
// promise can resolve into a value
// promise can reject into an erro 

function getSqRt(num){
    let sqRt = Math.sqrt(num);

    return new Promise(function(resolve, reject){

        if(isNaN(sqRt)){
            reject('Err, invalid value')
        }else{
            resolve(sqRt)
        }
    })
}
/*
// let z = getSqRt(4);
// console.log(z);

let x = getSqRt();

x
.then((val)=>console.log(val))
.catch((err)=>console.log(err))
/*
// -----creating promise 
// write a function greet () that return a promis 
// the promise never rejects 
// 1) it always resoves to a value "Hellow world! i Love js "

function greet(value){
    // let value = "Hello World! I love JS"
    return new Promise(function(resolve, reject){
        resolve("Hello World! I love JS")
    //    resolve(value);
    })
}

// consuming the promise 
// invoke greet() function here and console.lgo the value it resoves to .
// let x = greet("Hello World! I love JS");
// x
// .then((val)=>console.log(val))
// .catch((err)=>console.log(err))

greet().then((val)=>console.log(val));

// write a function greet () that return a promis 
// the promise never rejects 
// 2) it always reject to a value "Sorry, something went wrong"

function greet1(){
    return new Promise(function(resolve, reject){
        reject("Sorry, something went wrong")
    })
}
greet1().catch((err)=>console.log(err));

*/
// -------------------------------------------------------------------------

/*
let usersData = [
    {id: 1, name: 'vivek'}, 
    {id: 2, name: 'Akash'}
]

let orderData = [
    {id: 1 , userId: 1, amount : 500}, 
    {id: 2 , userId: 1, amount : 1000},
    {id: 3 , userId: 2, amount : 2000}
]

// Creating the promise part 

// write a function fetchUser that return a promise 
// functioin takes in userId
// if user exists it resolve to the user data 
// if user doesnot exist it rejects to 'Sorry, usrr doesnot exist'
// hint : console.log(usersData.find((user)=>user.id===2));

function checkUser(userId){
   
    let user = usersData.find((user)=>user.id==userId);
    return new Promise(function(resolve, reject){
        if(user){
            resolve (user);
        }else{
            reject ("Sorry, user doesnot exist")
        }
    })
}
// checkUser(1).then((val)=>console.log(val)).catch((err)=>console.log(err));

function checkUserOrder (userId){
    let orders = orderData.filter((order)=>order.userId==userId);
    return new Promise(function(resolve, reject){
        if(orders && orders.length){
            resolve(orders)
        }else{
            reject ("Sorry user don't have any order")
        }
    })
}
// checkUserOrder(2).then((val)=>console.log(val)).catch((err)=>console.log(err));

let x = checkUser(1);

x
.then((val)=>{
    return checkUserOrder(1);
})
.then((val)=>{
    console.log(val)
})

let resPromise = fetch("https://jsonplaceholder.typicode.com/posts/?_limit=3&_page=5");
resPromise
.then((res)=>{
    console.log(res);
    return  res.json();
})
.then((data)=>{
    console.log(data);
})
*/

//----------------------------------------------------------------------------------------

let resPromise = fetch("https://jsonplaceholder.typicode.com/users/1")

resPromise
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log(data);
})

// fetch request to https://jsonplaceholder.typicode.com/posts?userId=5&_limit=1 
// [{userId:5, id: <postid>, title:...}]

// another fetch request to https://jsonplaceholder.typicode.com/comments?postId=<postid>

// console.log(there are 5 comments)

fetch(" https://jsonplaceholder.typicode.com/posts?userId=5&limit=1")
.then((res) =>res.json())
.then((postData)=>{
  console.log(postData)
  let postId = postData[0].id;
  // console.log(postId);
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
})
.then((res)=> res.json())
.then((comments)=>{
  console.log(comments);
  console.log(`You have a total of ${comments.length} comments`)
})
