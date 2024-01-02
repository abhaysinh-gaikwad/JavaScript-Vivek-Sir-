/*

let userName = localStorage.getItem("masaiUserName")|| "";

let inpt = document.getElementById('inpt');
inpt.value = userName;

let btn = document.getElementById('btn');
// console.log(inpt, btn);

btn.addEventListener('click', (e)=>{
    userName = inpt.value;
    console.log("userName", userName);
    localStorage.setItem("masaiUserName",userName);
})
*/

// let btnSet = document.getElementById('btnSet');
// let btnGet = document.getElementById('btnGet');
// let btnPush = document.getElementById('btnPush');

// let users = ["vivek, akash, abhishek"]
// let subjects ={
//     primary: "javascript",
//     secondary: "Python", 
//     optional: "Java",
// }

// btnSet.addEventListener('click',(e)=>{
//     // console.log("hi")
//     localStorage.setItem("masaiUsers", JSON.stringify(users));
//     localStorage.setItem("masaiSubjects", JSON.stringify(subjects))
// })

// btnGet.addEventListener('click',(e)=>{
//     let userList = localStorage.getItem('masaiUsers')
//     console.log(userList, typeof userList, Array.isArray(userList));

//     let subjList = JSON.parse(localStorage.getItem("masaiSubjects"))
//     console.log(subjList, typeof subjList);
// })

// btnPush.addEventListener('click',(e)=>{
//     console.log("hi")
// })

let url = "https://jsonplaceholder.typicode.com/posts/?_limit=3&_page=5";

fetch(url)
.then((res)=>{
    let y = res.json();
    // console.log(y);
    return y;
})
.then((data)=>{
    console.log(data);
})


