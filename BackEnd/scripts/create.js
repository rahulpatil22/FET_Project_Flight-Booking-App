let editor;
var display = () => {   //Need to declare display as var because display is initialized multipled times 
    let isLogin = sessionStorage.getItem("userid");//jquery session not working
    if (isLogin) {
        $("#login").css("display","none");
        $("#signup").css("display","none");

    } else {
        $("#create").css("display","none");
        $("#logout").css("display","none");
    }
};

const onLoadTextEditor = () => {
    display();
    ClassicEditor.create(document.querySelector("#editor")) 
  /*    ClassicEditor.create($("#editor"))*/
        .then((newEditor) => {
            editor = newEditor;
        })
        .catch((error) => {
            console.error(error);
        });
};

const handleOnClickforBlog = (event) => {
    let flag=true;
    let name = "";
    const editortext = editor.getData().replace(/<[^>]+>/g, "");
    //const editortext = editorData.replace(/<[^>]+>/g, "");
    const userid = sessionStorage.getItem("userid");
    event.preventDefault();
    try {
        name = document.getElementById("image").files.item(0).name;
    } catch (e) {
        name = "none";
        flag=false;
    }

    const blog = {
//        userid: userid,
        userid,
        category: $("#category").val(),
        title: $("#txttitle").val(),
        imgpath: "../BackEnd/images/" + name,
        text: editortext,
        timestamp: new Date(),
        likes: 0,
        comments: [],
        flag: flag,
        likeStatus: [],
    };
    
    if (blog.title != "" && blog.text != "") {
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "http://localhost:3000/blogs",
            data: JSON.stringify(blog),
            dataType: "json",
            success: (resultData)=>{
                alert("Save Complete");
                console.log(resultData);
            },
            error: (xhr, status, error)=>{
                const errorMessage = xhr.status + ': ' + xhr.statusText
                alert('Error - ' + errorMessage);
            }
            
        });
    } else {
        alert("Title and text are required");
    }
};
