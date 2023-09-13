const addComment = (blogid) => {
    if($("#txtcomment").val()) {

        const comment = {
            userid: sessionStorage.getItem("userid"),
            text: $("#txtcomment").val(),
        };

        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: `http://localhost:3000/blogs?id=${blogid}`,
            dataType: "json",
            success: (blog) => {
                if (blog != null) {
                    const { comments } = blog[0];
                    const commentarr = [...comments, comment]; //comments appended

                    $.ajax({
                        type: "PATCH",
                        contentType: "application/json",
                        url: `http://localhost:3000/blogs/${blogid}`,
                        data: JSON.stringify({ comments: commentarr }),
                        dataType: "json",
                        success: (data) => {
                            alert("Save Complete");
                            console.log(data);
                        },
                        error: (xhr, status, error) => {
                            const errorMessage =
                                xhr.status + ": " + xhr.statusText;
                            alert("Error - " + errorMessage);
                        },
                    });
                }
            },
            error: (xhr, status, error) => {
                const errorMessage = xhr.status + ": " + xhr.statusText;
                alert("Error - " + errorMessage);
            },
        });
    } else {
        $("#txtcomment").css("border","2px solid red");
        $("#txtcomment").val("Cannot Post Empty Comment");
        $("#txtcomment").css("text-allign","center");
    }
};
