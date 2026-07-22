const btn = document.querySelector("button");
let count =0;
btn.addEventListener("click",function(){
    console.log("Button Clicked!");
    btn.innerText="Button Clicked!";
    count=count+1
    console.log(count);

})
