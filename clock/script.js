/*
let stopButton = document.getElementById('stop');
stopButton.innerText = "Stop"


function greet(){
    console.log("greeting");
}
console.log("hii")


let val1 = setTimeout(()=>{console.log("timeout1")}, 3000);
let val2 = setTimeout(greet, 3000);
console.log(val1)
console.log(val2)

stopButton.addEventListener("click",()=>{
    clearTimeout(val1)
    // clearTimeout(val1)
})
*/

// setInterval

/*
let stopButton = document.getElementById('stop');
stopButton.innerText = "Stop"

let stopwatch = document.getElementById('stopwatch');
let resetButton = document.getElementById('reset');


let count = 0;
function increseCount(){
    stopwatch.innerText = count++;
}

 let id = setInterval(increseCount, 1000);

 

stopButton.addEventListener('click', ()=>{

    if(stopButton.innerText!=="Start"){
        clearInterval(id);
        stopButton.innerText = "Start"
    }else{
        id = setInterval(increseCount, 1000);
        stopButton.innerText = "Stop"
    }    
})

resetButton.addEventListener('click',()=>{
    clearInterval(id);
    count = 0;
    stopwatch.innerText = 0;
    stopButton.innerText = 'Start'
})
*/
//------------------------------------------------------------------------------------------------


let stopButton = document.getElementById("stop");

let container = document.getElementById("container");
let img = document.createElement("img");
container.append(img);

let imageArr = ["https://images.unsplash.com/photo-1703593693015-3b5ff2708244?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1682686581413-0a0ec9bb35bb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1682695795557-17447f921f79?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1682685797366-715d29e33f9d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://images.unsplash.com/photo-1703607980028-54323dab4040?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]

let index = 0;
let id = setInterval(()=>{
  img.src = imageArr[index++];
},2000);

stopButton.addEventListener( 'click', ()=>{
  if(stopButton.innerText!=='Start'){
    clearInterval(id);
    stopButton.innerText = "Start";
  }else{
    id = setInterval(()=>{
      if(index >= imageArr.length){
        index = 0;
      }
      img.src = imageArr[index++];
    },2000)
    stopButton.innerText = "Stop"
  }
})