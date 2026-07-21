let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let h1 = document.querySelector("h1");
    let change = rgb();
    h1.innerHTML=change;
    let div = document.querySelector("div");
    div.style.backgroundColor=change;
});
function rgb(){
    let red= Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255);
    let blue= Math.floor(Math.random()*255);
    let col = `rgb(${red},${green},${blue})`;
    return col;
}