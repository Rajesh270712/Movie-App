var userDetails= JSON.parse(localStorage.getItem("userDetails"));

document.querySelector("#form").addEventListener("submit",login);

function login(){
    event.preventDefault();
    var flag=false;
    var email=document.querySelector("#email").value;
    var passW=document.querySelector("#pass").value;
    userDetails.forEach((user) => {
        // console.log( user.password, user.email)
        if(user.email==email && user.password==passW)
        {
            flag=true;
            window.location.href="index.html";
        }
    })
    if(!flag){
        alert("Invalid Credentials!")
    }
}