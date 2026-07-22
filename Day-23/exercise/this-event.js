let btns = document.querySelectorAll("button");
function change(){
    this.style.background="pink";
    this.textContent = "Selected";
}
btns[0].addEventListener("click",change);
btns[1].addEventListener("click",change);
btns[2].addEventListener("click",change);