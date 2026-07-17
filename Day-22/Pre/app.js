let simg = document.getElementsByClassName("oldImg");
for(let i =0;i<simg.length;i=i+1){
    simg[i].src = "assets/jorden.png";
    console.dir("imgae is change");
}
document.getElementsByTagName("h2")[0].innerText="Something About Me";

