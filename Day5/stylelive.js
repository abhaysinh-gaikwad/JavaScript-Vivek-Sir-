// let btn1 = document.getElementById("button-1");
// let btn2 = document.getElementById("button-2");

// addign inline style using js 
// btn1.style.backgroundColor = "gold";

// adding a class using js
// btn1.classList.add("gold")
// console.log(btn1)


// btn1.addEventListener('click', (e)=>{
//     console.log(e);
//     btn2.classList.add("gold");
// })

// let btn1 = document.getElementById("button-1");
// let btn1 = document.getElementsByClassName("btn")[0];
console.log("its Working");

let btns = document.querySelectorAll(".btn");
console.dir(btns);

btns.forEach((btn)=> {
  btn.addEventListener('click', (e)=>{
    console.log(btn.innerText);
  })
});

// https://codepen.io/Abhaysinh-Gaikwad/pen/bGZVgGp?editors=1010
// https://codepen.io/Abhaysinh-Gaikwad/pen/yLwYgyX?editors=1010
// https://codepen.io/Abhaysinh-Gaikwad/pen/oNVjBjm?editors=1011
// https://codepen.io/Abhaysinh-Gaikwad/pen/eYXpgzV?editors=1011



