let grandparent = document.querySelector(".grandparent");
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");

// grandparent.addEventListener('click', function(e){
//     console.log("the child was clicked")
//     console.log(e);
//     console.log(e.target);
//     grandparent.style.color = 'red'
// })

grandparent.addEventListener('click', function (e) {
    console.log('Grandparent clicked 1');
    console.log(e.target); 
    // the element on which the event actually happend
  })
  
  parent.addEventListener('click', function (e) {
    console.log('Parent clicked 1');
    console.log(e.target); 
  })
  
  child.addEventListener('click', function (e) {
    console.log('child clicked 1');
    console.log(e.target);
  })