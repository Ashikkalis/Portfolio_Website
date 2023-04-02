var Name  = document.getElementById("name")
var email = document.getElementById("email")
var textarea = document.getElementById("textarea")
var button = document.getElementById("submit");
var formbox = document.getElementById("formbox");

button.addEventListener("click",(event)=>{
    if(Name.value !=="" && email.value !=="" && textarea.value !==""){
       submit();
       event.preventDefault();
      
    }
});

function submit(){
    var success = document.getElementById("success");
    success.classList.add("show");
    formbox.style.display="none";
}