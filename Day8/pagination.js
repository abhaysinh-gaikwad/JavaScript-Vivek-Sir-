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
      fetchAndRenderPosts(10, id);
      console.log(id);
    });
    return btn;
  }
  
  let postsUrl = "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1";
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
  
  function fetchAndRenderPosts(limit = 10, pageNumber = 1) {
    let postsUrl = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${pageNumber}`;
  
    fetch(postsUrl)
      .then((res) => {
        let xTotal = res.headers.get("X-Total-Count");
        console.log("Total Number of Items: ", xTotal);
  
        let xTotalButtons = Math.ceil(xTotal / limit);
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