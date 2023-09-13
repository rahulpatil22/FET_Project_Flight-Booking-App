var usrId = sessionStorage.getItem("userid");

var onClickforlike = (element, id, event) => {
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: `http://localhost:3000/blogs?id=${id}`,
        dataType: "json",
        success: (result) => {
            console.log("in get");
            if (result[0] != null) {
                console.log(result[0]);
                const {
                    userid,
                    category,
                    title,
                    imgpath,
                    text,
                    timestamp,
                    likes,
                    comments,
                    flag,
                    likeStatus,
                } = result[0];
                let obj = {
                    userid: userid,
                    category: category,
                    title: title,
                    imgpath: imgpath,
                    text: text,
                    timestamp: timestamp,
                    likes: likes,
                    comments: comments,
                    flag: flag,
                    id: id,
                    likeStatus: likeStatus,
                };

                let temp = true;
                for (let i = 0; i < likeStatus.length; i++) {
                    console.log(likeStatus[i].userId);
                    if (likeStatus[i].userId === usrId) {
                        temp = false;
                    }
                }

                console.log(temp);
                if (sessionStorage.getItem("userid") != null) {
                    if (temp === true) {
                        obj.likes = obj.likes + 1;
                        let firstChild = element.firstChild;
                        firstChild.innerText = obj.likes;
                        element.style.color = "blue";
                        obj.likeStatus.push({ userId: usrId });
                    } else {
                        alert("You've already liked this post");
                    }
                }

                $.ajax({
                    url: `http://localhost:3000/blogs/${id}`,
                    type: "PUT",
                    contentType: "application/json",
                    dataType: "json",
                    data: JSON.stringify(obj),
                    success: function (data, textStatus, xhr) {
                        console.log(data);
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        console.log("Error in Operation");
                    },
                });
            }
        },
    });
};

function updateUser(userId) {
    $.ajax;
}
