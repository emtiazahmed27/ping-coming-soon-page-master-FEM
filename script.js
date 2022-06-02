
const button=document.querySelector(".btn");
button.addEventListener("mouseover",sd);
function sd(){
    document.querySelector(".error").style.display="block";
}
button.addEventListener("mouseout",ds);
function ds(){
    document.querySelector(".error").style.display="none";
}

   