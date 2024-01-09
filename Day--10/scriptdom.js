// access the data => Get -> Read 
// Edit or update the product => PATCH/PUT
//create new data => POST
// delete data -> Delete

// CRUD

// C- create => POST
// R- Read => GET
// U- Update => PATCH/PUT
// D- delete => DELETE

let val  = fetch("https://jsonplaceholder.typicode.com/posts");
// val
// .then((data)=>(data.json()))
// .then((res)=>(console.log(res)))
// .catch((err)=>{console.log(err)})
// console.log(x);

async function fetchData(){
    try{
        let datres = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data  = await res.json();
        console.log(data);
    }
    catch (err){
        console.log(err)
    }
}
fetchData();