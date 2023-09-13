
    var display = () => {
        console.log("here");
        var isLogin = sessionStorage.getItem("userid");
        if (isLogin != null) {
            document.getElementById("login").style.display = "none";
            document.getElementById("signup").style.display = "none";
        } else {
            document.getElementById("create").style.display = "none";
            document.getElementById("logout").style.display = "none";
        }
    };
    
    const sessionClear = document.querySelector("#logout");
    sessionClear.addEventListener("click", function () {
        sessionStorage.clear();
        window.location.replace("home.html");
    });
    

