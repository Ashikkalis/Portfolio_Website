var textarea= document.getElementById("textarea");
var max=100;

textarea.addEventListener("input",function(){
    var textLength = textarea.value.length;
    
    if(textLength >= max){
        alert("Length Limit is 100 words")
    }
});