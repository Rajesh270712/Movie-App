document.querySelector("#form").addEventListener("submit",addDetails)

var userDetails=JSON.parse(localStorage.getItem("userDetails")) || [];

function addDetails(){
    event.preventDefault();
    var name=document.querySelector("#name").value;
    var mobile=document.querySelector("#mobile").value;
    var email=document.querySelector("#email").value;
    var pass=document.querySelector("#pass").value;
    if(name.length==0 || mobile.length==0 || email.length==0 || pass.length==0)
    {
        alert("Invalid Crediential");
    }
    else
    {
        var user={
            name:name,
            mobile:mobile,
            email:email,
            password:pass
        }
        userDetails.push(user);
        localStorage.setItem("userDetails",JSON.stringify(userDetails))
        alert("Successfully Registered!")
    }
}