const input = [1, 2, 3, 4, 5];

async function performTasks() {
  try {
    const result1 = await asynchronous1(input);
    const result2 = await asynchronous2(result1);
    const result3 = await asynchronous3(result2);
    console.log("Final result:", result3);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// performTasks();

function multiplyer(arr,value){
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(arr)){
            reject("the first argument has to be an array of numbers only.");
                }
                else if(typeof value !== "number"){
                    reject(`the second argument has to be a number but received ${typeof value}`);
                }
                else{
                    let ans = arr.map(item => item * value);
                    resolve(ans);
                } 
    })
}


function findOdd(arr){
    //filter all the odd elements and create a new array
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(arr)){
            reject("the first argument has to be an array of numbers only.");
        }
        else{
            let ans = arr.filter(item => item%2);
            resolve(ans);
        }
    })


    //invoke the cb with that new array having only odd elements
}

function findSum(arr){
    //find the sum of all the elements
    //invoke the cb with the sum;
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(arr)){
            reject("the first argument has to be an array of numbers only.");
        }
       else{
        let sum = arr.reduce((acc,item)=>acc+item);
        resolve(sum);
       }
    })
 
}


//findSum(arr1,(sum)=>{console.log(sum)})


//Error Handling callback;



let arr2 = [1,2,3,4,5,6,7,8];
//multiplyer
//[5,10,15,20,25,30,35,40]


async function findvalue() {
    try {
        let multipliedArray = await multiplyer(arr2, 5);
        console.log(multipliedArray)
        let oddElements = await findOdd(multipliedArray);
        console.log(oddElements)
        let sum = await findSum(oddElements);
        console.log(sum);
    } catch (error) {
        console.log("error: ",error);
    }
}

findvalue();

