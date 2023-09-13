var isLoggedIn = false;
var isImageUploaded = false;
var dispCont = document.querySelector("#displayContainer");

var numberOfBtn = document.querySelectorAll("button").length;

for (let i = 0; i < numberOfBtn; i++) {
    document
        .querySelectorAll("button")
        [i].addEventListener("click", function () {
            switch (this.value) {
                case "all":
                    displayPosts("*");
                    break;
                case "cars":
                    displayPosts("=cars");
                    break;
                case "music":
                    displayPosts("=music");
                    break;

                case "travel":
                    displayPosts("=travel");
                    break;

                case "food":
                    displayPosts("=food");
                    break;
                case "fashion":
                    displayPosts("=fashion");
                    break;
                case "gaming":
                    displayPosts("=gaming");
                    break;
            }
        });
}

const displayPosts = async (catType) => {
    let uri = "http://localhost:3000/blogs"; //Endpoint for the GET Request
    uri = uri + "?category" + catType;
    const res = await fetch(uri); // waits till its gets all data from the server and the response is stored in
    // the const res; since we used fetch we get a response Object and not just data
    const blogs = await res.json(); // .json() parses the data in res (response object) and converts it to JS Object
    //from JSON, wait first and then store all the data in the post
    var template = "";
    blogs.forEach((blog) => {
        if (sessionStorage.getItem("userid") != null) {
            //if logged in

            if (blog.flag) {
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

                <i class="fa fa-thumbs-up icon"><p class="fa-likes">${blog.likes}</p></i>
                </div>
              </div>
            </div>
          </div>
    </div>
           `;
            } else {
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

                <i class="fa fa-thumbs-up icon"> <p  class="fa-likes">${blog.likes}</p></i>
                </div>
              </div>
            </div>
          </div>
    </div>
           `;
            }
        }
        if (sessionStorage.getItem("userid") == null) {
            //if not logged in
            console.log("in else");
            if (blog.flag) {
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
                           <a href="#" class="read">Read the Blog</a>
                        </button>
                    </div><br>
                    <div>
                    <i  class="fa fa-thumbs-up icon" > <p  class="fa-likes">${blog.likes}</p></i>
                    </div>
                  </div>
                </div>
              </div>
        </div>
               `;
            } else {
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
                               <a href="#" class="read">Read the Blog</a>
                            </button>
                        </div><br>
                        <div>
                        <i  class="fa fa-thumbs-up icon" > <p class="fa-likes">${blog.likes}</p></i>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
                   `;
            }
        }
    });
    dispCont.innerHTML = template;
};

// [12:16 PM] Ankit Patel (Guest)

// [12:15 PM] Deepkumar Chaudhari (Guest)

// <div class="col-sm-12">${​​​​​​​getImage(blog.imagePath)}​​​​​​​</div>

// ​[12:17 PM] Ankit Patel (Guest)
//     getImage(imagePath) {​​​​​​​
//    if(imagePath) {​​​​​​​

//    return `<img class="blogImg" src="${​​​​​​​​​​blog.imgpath}​​​​​​​​​​​​​​​​​" width="250px"; height="250px"/>`;
// }​​​​​​​ else {​​​​​​​
//    return `blank image`;
// }​​​​​​​
// }​​​​​​​
