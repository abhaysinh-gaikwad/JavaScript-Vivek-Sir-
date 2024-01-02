let btn = document.createElement('button');

btn.innerText = "Button"

let div = document.getElementById('container');

div.append(btn);


let arr = [1, 2, 3, 4,5];

function multiplyer (arr, value, cb){
    let ans = arr.map(item => item* value);
    cb(ans);
}

multiplyer(arr, 3, (ans)=>{
    console.log(ans);
})

//complete the function 
let arr1 = [1, 2, 3, 4, 5, 6, 7] ;
function findodd(arr,cb){
    
  let ans = arr1.filter((item) => item%2)
  cb(ans);
}

findodd(arr1, (ans)=>{
  console.log(ans);
})


// -------------------------------------
let arr2 = [1, 2, 3, 4, 5, 6, 7] ;
function findSum (arr, cb){
   let sum = arr.reduce((acc, item)=>{
    return acc + item
   })
   cb(sum);
}

findSum(arr2, (sum)=>{
    console.log(sum);
})
