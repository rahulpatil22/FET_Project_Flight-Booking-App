const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".more");

const renderdetails = async () => {
    let uri = "http://localhost:3000/blogs/" + id;
    const res = await fetch(uri);
    const blogs = await res.json();
    if (blogs.flag == true) {
        var template = `
    <div class="container-fluid">
      <h3>Title:${blogs.title}</h3>
      <div>
      <h3>Image:</h3>
      <div class="col-sm-12"><img class="blogImg" src="${blogs.imgpath}" width="250px"; height="250px"/></div>
      </div>
      <h3>Blog Text:</h3><textarea class="blogText" disabled>${blogs.text}</textarea>
      <div>
            <i id="${blogs.id}" class="fa fa-thumbs-up icon" onclick="onClickforlike(this,this.id,event)"><p class="fa-likes">${blogs.likes}</p></i>
      <div>
      <button class="btn btn-dark" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      Comment
      </button>
      <div class="collapse" id="collapseExample">
      <textarea class="blogText2" id="txtcomment"></textarea>
      <div>
      <button class="btn btn-dark" type="button" id="${blogs.id}" onclick="addComment(${blogs.id})">

      Post
      </button></div>
      </div>
      </div>
      </div>
      <div class="comment"><button class="btn btn-outline-dark" onclick="displayComment(${blogs.id})">Show all comments</button></div>
      <div class="overflow-auto" id="allcomments"></div> `;
    } else {
        template = `
        <div class="container-fluid">
        <h3>Title:${blogs.title}</h3>
        <div>
        <h3>Blog Text:</h3><textarea class="blogText" disabled >${blogs.text}</textarea>
        <div>
        <div>
            <i id="${blogs.id}" class="fa fa-thumbs-up icon" onclick="onClickforlike(this,this.id,event)"><p class="fa-likes">${blogs.likes}</p></i>
        </div>
        <div>
        <button class="btn btn-dark" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Comment
        </button>
        <div class="collapse" id="collapseExample">
       <textarea class="blogText2" id="txtcomment"></textarea>
        <div>
        <button class="btn btn-dark" type="button" id="${blogs.id}" onclick="addComment(${blogs.id})">
        Post
        </button></div>
        </div>
        </div>
        </div>
        <div class="comment"><button class="btn btn-outline-dark" onclick="displayComment(${blogs.id})">Show all comments</button></div>
        <div id="allcomments"></div>      `;
    }

    container.innerHTML = template;
};
//window.onload=renderdetails

window.addEventListener("DOMContentLoaded", () => {
    renderdetails();
});

