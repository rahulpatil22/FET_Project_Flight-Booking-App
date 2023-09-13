    const searchBoxRef = document.getElementById("searchBox");
    const dispResultRef = document.getElementById("dispResult");
    var isLogin = sessionStorage.getItem("userid");
    if (isLogin == null) {
        document.getElementById("searchBox").style.visibility = "hidden";
    } else {
        document.getElementById("searchBox").style.visibility = "visible";
    }
    searchBoxRef.addEventListener("keyup", async (e) => {
        let uri = "http://localhost:3000/"; //Endpoint for the GET Request
        uri = uri + "blogs";
        const res = await fetch(uri);
        const blogs = await res.json();
        var template = "";
        blogs.forEach((blog) => {
            console.log(blog.title);
            var title = blog.title.toLowerCase();
            var search = searchBoxRef.value.toLowerCase();
            if (title.match(search)) {
                if (search.match(/[a-zA-z]/)) {
                    console.log(blog.title + "I got clicked");
                    template =
                        template +
                        `
            <div>
                <a href="displayBlog.html?id=${blog.id}"><h5 style="color:black">${blog.title}|${blog.category}</h5></a>
            </div>`;
                }
            }
        });
        dispResultRef.innerHTML = template;
    });



