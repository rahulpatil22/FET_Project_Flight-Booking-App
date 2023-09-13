const generateCardWithImage = (imgpath, title, category, likes) => {
    return `
    <div class="col-md-4 col-12 mb-3">
    <div class="card">
      <img class="img-fluid" style="height:220px"
        src="${imgpath}">
      <div class="card-body">
        <h4 class="card-title">${title}</h4>
        <button type="button" class="btn btn-warning"><a href="categories.html?_sort=likes&_order=desc"
            style="color: black;">${category}</a></button>
            <h5 class="card-likes">Likes: ${likes}</h5>
      </div>
    </div>
    </div>
         `;
};

const generateCardWithoutImage = (imgpath, title, category, likes) => {
    return `
      <div class="col-md-4 col-12 mb-3">
      <div class="card">
        <img class="img-fluid" style="height:220px"
          src="../BackEnd/images/image2.jfif">
        <div class="card-body">
          <h4 class="card-title">${title}</h4>
          <button type="button" class="btn btn-warning"><a href="categories.html?_sort=likes&_order=desc"
              style="color: black;">${category}</a></button>
              <h5 class="card-likes">Likes: ${likes}</h5>
        </div>
      </div>
      </div>
           `;
};
var display = () => {
    console.log("here");
    var isLogin = sessionStorage.getItem("userid");
    if (isLogin) {
        $("#login").css("display","none");
        $("#signup").css("display","none");
    } else {
        $("#create").css("display","none");
        $("#logout").css("display","none");
    }
};

const mostLiked = () => {
    display();
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "http://localhost:3000/blogs?_sort=likes&_order=desc",
        dataType: "json",
        success: (blogs) => {
            console.log("in");
            let display1 = "";
            let i = 0;
            try {
                while (i <= 2) {
                    if (blogs[i].flag)
                        display1 += generateCardWithImage(
                            blogs[i].imgpath,
                            blogs[i].title,
                            blogs[i].category,
                            blogs[i].likes
                        );
                    else
                        display1 += generateCardWithoutImage(
                            blogs[i].imgpath,
                            blogs[i].title,
                            blogs[i].category,
                            blogs[i].likes
                        );
                    i++;
                }
                $("#d1").html(display1);   //first row
                //document.getElementById("d1").innerHTML = display1; //first row

                let display2 = "";
                while (i <= 5) {
                    if (blogs[i].flag)
                        display2 += generateCardWithImage(
                            blogs[i].imgpath,
                            blogs[i].title,
                            blogs[i].category,
                            blogs[i].likes
                        );
                    else
                        display2 += generateCardWithoutImage(
                            blogs[i].imgpath,
                            blogs[i].title,
                            blogs[i].category,
                            blogs[i].likes
                        );
                    i++;
                }
                $("#d2").html(display2);   //first row
                //document.getElementById("d2").innerHTML = display2; //for row 2
            } catch (e) {
                if (blogs.length < 3) {
                    // document.getElementById("d1").innerHTML =
                    //     "<div>.--Not Enough Blogs to display</div>";
                    $("#d1").html("<div>.--Not Enough Blogs to display</div>");   //first row
                } else if (blogs.length > 3 && blogs.length < 6) {
                    // document.getElementById("d2").innerHTML =
                    //     "<div>.--Not Enough Blogs to display</div>";
                    $("#d2").html("<div>.--Not Enough Blogs to display</div>");
                }
            }
        },
    });
};
