const displayComment=(blogid)=>{
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "http://localhost:3000/users",
        dataType: "json",
        success: (users) => {
                let userMap=new Map();
                for(let i=0;i<users.length;i++)
                {
                    userMap.set(`${users[i].id}`,`${users[i].name}`);
                }
                $.ajax({
                    type: "GET",
                    contentType: "application/json",
                    url: `http://localhost:3000/blogs?id=${blogid}`,
                    dataType: "json",
                    success: (blog) => {
                        if (blog != null) {
                            const {
                                comments
                            } = blog[0];
                            let commentData="<table>";
                            for(let i=0;i<comments.length;i++)
                            {
                                commentData+=`
                                
                                        <table class="showComment">
                                            <tr><td>Name:${userMap.get(comments[i].userid)}</td></tr>
                                            <tr><td>Comment:${comments[i].text}</td></tr><br>
                                        </table>
                                
                                      `
                            }
                            commentData+="</table>";
                            $("#allcomments").html(commentData);
                        }
                    },
                    error: (xhr, status, error)=>{
                        const errorMessage = xhr.status + ': ' + xhr.statusText
                        alert('Error - ' + errorMessage);
                    }
                });
        },
        error: (xhr, status, error)=>{
            const errorMessage = xhr.status + ': ' + xhr.statusText
            alert('Error - ' + errorMessage);
        }
    });


}







