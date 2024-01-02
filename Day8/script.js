// convert this array to buttons inside div#main
/*
let main = document.getElementById("main");

let primary_buttons = [
  {text: 'First', 'data-id': 1},
  {text: '2', 'data-id': 2},
  {text: '3', 'data-id': 3},
  {text: '4', 'data-id': 4},
  {text: '5', 'data-id': 5},
  {text: 'Last', 'data-id': 6},
]

function getAsButton(text, dataId) {
  let btn = document.createElement('button');
  btn.setAttribute('data-id', dataId)
  btn.innerText = text
  return btn;
}

function renderButtonsToMain() {
  primary_buttons.forEach((item)=>{
     main.append(getAsButton(item.text, item['data-id']))
  })
}

renderButtonsToMain();


//https://codepen.io/Abhaysinh-Gaikwad/pen/rNROJoz?editors=1011

*/
/*
let main = document.getElementById("main");

let primary_buttons = [
  {text: 'First', 'data-id': 1},
  {text: '2', 'data-id': 2},
  {text: '3', 'data-id': 3},
  {text: '4', 'data-id': 4},
  {text: '5', 'data-id': 5},
  {text: 'Last', 'data-id': 6},
]

function getAsButton(text, dataId) {
  let btn = document.createElement('button');
  btn.setAttribute('data-id', dataId)
  btn.innerText = text
//   console.dir(btn)

  btn.addEventListener('click', function(e){
    console.log(e.target);
    // let id = e.target.getAttribute('data-id');
    let id = btn.dataset.id;
    // let id = btn.getAttribute("data-id")
    console.log(id)
  })
  return btn;
}

function renderButtonsToMain() {
  primary_buttons.forEach((item)=>{
     main.append(getAsButton(item.text, item['data-id']))
  })
}

renderButtonsToMain();
*/
//https://codepen.io/Abhaysinh-Gaikwad/pen/WNmQzbx?editors=0011
// ------------------------------------------------------------------------------------
// let main = document.getElementById("main");

// let primary_buttons = [
//   {text: 'First', 'data-id': 1},
//   {text: '2', 'data-id': 2},
//   {text: '3', 'data-id': 3},
//   {text: '4', 'data-id': 4},
//   {text: '5', 'data-id': 5},
//   {text: 'Last', 'data-id': 6},
// ]

// function getAsButton(text, dataId) {
//   let btn = document.createElement('button');
//   btn.setAttribute('data-id', dataId)
//   btn.innerText = text
// //   console.dir(btn)

//   btn.addEventListener('click', function(e){
//     console.log(e.target);
//     // let id = e.target.getAttribute('data-id');
//     let id = btn.dataset.id;
//     // let id = btn.getAttribute("data-id")
//     console.log(id)
//   })
//   return btn;
// }

// function renderButtonsToMain() {
//   primary_buttons.forEach((item)=>{
//      main.append(getAsButton(item.text, item['data-id']))
//   })
// }

// renderButtonsToMain();

//////////==================================================///////////////////////////////

function getAsButton(text, dataId) {
  let btn = document.createElement("button");
  btn.setAttribute("data-id", dataId);
  btn.innerText = text;
  //   console.dir(btn)

  btn.addEventListener("click", function (e) {
    console.log(e.target);
    // let id = e.target.getAttribute('data-id');
    let id = btn.dataset.id;
    app.innerHTML = "Loding Data...";
    fetchAndRenderPosts(15, id);
    console.log(id);
  });
  return btn;
}

let postsUrl = "https://jsonplaceholder.typicode.com/posts?_limit=15&_page=1";
// let postsUrl = 'https://jsonplaceholder.typicode.com/posts';

let app = document.getElementById("app");

function getPost(id, title) {
  let postDiv = document.createElement("div");
  postDiv.setAttribute("data-id", id);
  postDiv.className = "post";

  let idSpan = document.createElement("span");
  idSpan.className = "post-id";
  idSpan.innerText = id;

  let titleSpan = document.createElement("span");
  titleSpan.className = "post-title";
  titleSpan.innerText = title;

  postDiv.append(idSpan, titleSpan);
  return postDiv;
}

function getPostList(posts) {
  let postListDiv = document.createElement("div");
  postListDiv.className = "post-list";

  posts.forEach((post) => {
    postListDiv.append(getPost(post.id, post.title));
  });
  return postListDiv;
}

function fetchAndRenderPosts(limit = 15, pageNumber = 1) {
  let postsUrl = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${pageNumber}`;

  fetch(postsUrl)
    .then((res) => {
      let xTotal = res.headers.get("X-Total-Count");
      console.log("Total Number of Items: ", xTotal);

      let xTotalButtons = Math.ceil(xTotal / 15);
      main.innerHTML = "Loding Buttons...";
      renderPaginationButtons(xTotalButtons);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      app.innerHTML = ""
      app.append(getPostList(data));
    });

  function renderPaginationButtons(xTotalButtons) {
    main.innerHTML = "";
    for (let index = 1; index <= xTotalButtons; index++) {
      main.append(getAsButton(index, index));
    }
  }
}
fetchAndRenderPosts();
// total of 100 items
// page = 10 items
// buttons = Math.ceil (total / pageSize )

// let postsUrl = 'https://jsonplaceholder.typicode.com/posts?';

// let app = document.getElementById("app");

// fetch(`${postsUrl}?_limit=15&_page=1`)
// .then((res)=> {
//   console.log(res.headers.get('X-Total-Count'))
//   return res.json()
// })
// .then(data=>{
//   app.innerHTML =
//   `<per>
//     ${JSON.stringify(data, null, 2).trim()}
//   </per>`;
// })
