/*
leturl = `https://jsonplaceholder.typicode.com/users`

function syncFunction1 (){
    console.log(1)
}

function asyncFunction2 (){
   setTimeout(function (){
    console.log("async: "+2)
   },1000)
}

function syncFunction2 (){
    console.log(2)
}

function syncFunction3 (){
    console.log(3)
}

syncFunction1 ()
asyncFunction2()
syncFunction2 ()
syncFunction3 ()
*/

// function getPosts(postNumber, cb){
//     fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`)
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         cb(data);
//     })
// }

// getPosts(2,(data)=>{
//     console.log(data);
// })


// let url = "https://jsonplaceholder.typicode.com/posts?_limit=3&_page=3"

// fetch(url)
//     .then((res)=>{
//         console.log(res);
//     if(res.ok===true){
//         return res.json();
//     }else{
//         throw new Error ("Error")
//     }
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>console.log(err))

//Async Await

// let url = "https://jsonplaceholder.typicode.com/posts?_limit=3&_page=3"
// async function getPosts(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data);
//     }catch{
//         console.log(error);
//     }
// }

// getPosts()

// let url = "https://jsonplaceholder.typicode.com/posts"
// async function getPosts1(){
//     try{
//         let res = await fetch(url+`?_limit=3`)
//         let data = await res.json();
//         console.log(data);
//     }catch(error){
//         console.log(error)
//     }
// }

// getPosts1()

//-----------------------------------------------------------------------------------------

// {
//     "createdAt": "2024-01-03T14:49:03.430Z",
//     "name": "Bhashkar",
//     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/420.jpg",
//     "id": "52",
//     "age": 23,
//     "salary": 10000,
//     "department": "IT"
//   }
// let url = "https://6595955604335332df82fcab.mockapi.io/employees/Employees"
  
// fetch(url, {
//     method: "POST",
//     headers: {
//         'ContentType-type' : 'application/json'
//     },
//     body: JSON.stringify({
//         userId: 1, 
//         "name": "Abhaysinh",
//         "title": "MasaiSchool",
//         "body": "MasaiSchool Rocks body content comes here"
//     }),
// })

// .then((res)=>{
//     console.log(res)
//     if(res.ok==true){
//         return res.json();
//     }else{
//         throw new Error("Error")
//     }
// })
// .then((data)=>{
// console.log(data);
// })
// .catch((err)=>console.log(err));


// let url = `https://jsonplaceholder.typicode.com/posts/1`;
  
// fetch(url, {
//     method: "PATCH",
//     headers: {
//         "Content-type" : "application/json"
//     },
//     body: JSON.stringify({
//         body: "MasaiSchool Rocks body content comes here"
//     }),
// })

// .then((res)=>{
//     console.log(res)
//     if(res.ok===true){
//         return res.json();
//     }else{
//         throw new Error("Error")
//     }
// })
// .then((data)=>{
// console.log(data);
// })
// .catch((err)=>console.log(err));



// let url = `https://jsonplaceholder.typicode.com/posts/1`;
  
// fetch(url, {
//     method: "DELETE",
//     headers: {
//         "Content-type" : "application/json"
//     }
// })

// .then((res)=>{
//     console.log(res)
//     if(res.ok===true){
//         return res.json();
//     }else{
//         throw new Error("Error")
//     }
// })
// .then((data)=>{
// console.log(data);
// })
// .catch((err)=>console.log(err));



let url = `https://jsonplaceholder.typicode.com/posts/`;
  
async function postNewPost(){
    try{
        let res= await fetch(url,{
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body:JSON.stringify({
                name : 'Abhaysinh',
                title: "Aspiring Developer",
                body: "Masai Topper",
            }),
        });
        let data = await res.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }

}
postNewPost();

