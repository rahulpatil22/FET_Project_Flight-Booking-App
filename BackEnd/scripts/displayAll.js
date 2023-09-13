const renderPosts = async () => {
    let uri = "http://localhost:3000/blogs";

    const res = await fetch(uri);
    const blogs = await res.json();

    let template = "";
    blogs.forEach((blog) => {
      if(sessionStorage.getItem("userid")!=null){       //if logged in

        if(blog.flag){
        template += `
        <div class="container-fluid blogs2">
        <div class="row">
          <div class="col-md-3">
            <div class="col-sm-12"><img class="blogImg" src="${blog.imgpath}" width="250px"; height="250px"/></div>
          </div>
          <div class="col-md-9">
            <div class="col-sm-12"><h4>Title:${blog.title}</h4></div>
            <div class="col-sm-12"><h4>Category:${blog.category}</h4></div>
            <div class="catButton">
                <button type="button" class="btn btn-outline-dark ">
                   <a href="displayBlog.html?id=${blog.id}" class="read">Read the Blog</a>
                </button>
            </div><br>
            <div>
            <i  id="${blog.id}" class="fa fa-thumbs-up icon"><p class="fa-likes">${blog.likes}</p></i>
            </div>
          </div>
        </div>
      </div>
</div>
       `}
       else{
        template += `

        <div class="container-fluid blogs2">
        <div class="row">
          <div class="col-md-3">
            <div class="col-sm-12"><img class="blogImg" src="../BackEnd/images/image2.jfif" width="250px"; height="250px"/></div>
          </div>
          <div class="col-md-9">
            <div class="col-sm-12"><h4>Title:${blog.title}</h4></div>
            <div class="col-sm-12"><h4>Category:${blog.category}</h4></div>
            <div class="catButton">
                <button type="button" class="btn btn-outline-dark">
                   <a href="displayBlog.html?id=${blog.id}" class="read">Read the Blog</a>
                </button>
            </div><br>
            <div>
            <i id="${blog.id}" class="fa fa-thumbs-up icon"><p class="fa-likes">${blog.likes}</p></i>
            </div>
          </div>
        </div>
      </div>
</div>
       `
       }

    }
       if(sessionStorage.getItem("userid")==null) {  //if not logged in
           console.log("in else");
           if(blog.flag){
        template += `

        <div class="container-fluid blogs2">
        <div class="row">
          <div class="col-md-3">
            <div class="col-sm-12"><img class="blogImg" src="${blog.imgpath}" width="250px"; height="250px"/></div>
          </div>
          <div class="col-md-9">
            <div class="col-sm-12"><h4>Title:${blog.title}</h4></div>
            <div class="col-sm-12"><h4>Category:${blog.category}</h4></div>
            <div class="catButton">
                <button type="button" class="btn btn-outline-dark">
                   <h6 class="read">Read the Blog</h6>
                </button>
            </div><br>
            <div>

            <i  class="fa fa-thumbs-up icon" ><p class="fa-likes">${blog.likes}</p></i>
            </div>
          </div>
        </div>
      </div>
</div>
       `
           }else{
            template += `

            <div class="container-fluid blogs2">
            <div class="row">
              <div class="col-md-3">
                <div class="col-sm-12"><img class="blogImg" src="../BackEnd/images/image2.jfif" width="250px"; height="250px"/></div>
              </div>
              <div class="col-md-9">
                <div class="col-sm-12"><h4>Title:${blog.title}</h4></div>
                <div class="col-sm-12"><h4>Category:${blog.category}</h4></div>
                <div class="catButton">
                    <button type="button" class="btn btn-outline-dark">
                       <a href="" class="read">Read the Blog</a>
                    </button>
                </div><br>
                <div>

                <i class="thumbClass fa fa-thumbs-up icon" ><p class="fa-likes">${blog.likes}</p></i>
                </div>
              </div>
            </div>
          </div>
    </div>
           `
           }
       }
    });

    container.innerHTML = template;
};

const container = document.querySelector("#displayContainer");
window.addEventListener("DOMContentLoaded", () => renderPosts());
//window.onload=renderPosts;
