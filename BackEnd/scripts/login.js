

var onClickforlogin=()=>{
    var email=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url: `http://localhost:3000/users?userName=${email}`,
        dataType: "json",
        success: (result)=>{

            if(result[0]!=null){
                console.log(result[0].password);
                if(result[0].password === password)
                {
                    alert("Login successful");
                    sessionStorage.setItem("userid",result[0].id);
                    window.location.href = "../FrontEnd/home.html";
                }else{
                    console.log("error")
                }
            }else{
                alert("User does not exits");
            }
        },
        error: (xhr, status, error) => {
            const errorMessage = xhr.status + ": " + xhr.statusText;
            alert("Error - " + errorMessage);
        }

    })


}


