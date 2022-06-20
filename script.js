
const button=document.querySelector(".btn");
const inputSec=document.querySelector(".mail");

button.addEventListener("mouseover",()=>{
    if(inputSec.value.length==0){
        document.querySelector(".error").style.display="block";
    }
    else{
        document.querySelector(".error").style.display="none";
    }
});
button.addEventListener("mouseout",ds);
function ds(){
    document.querySelector(".error").style.display="none";
}

   