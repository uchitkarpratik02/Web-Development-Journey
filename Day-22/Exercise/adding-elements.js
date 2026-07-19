const container = document.getElementById("container");
let heading = document.createElement("h1");
heading.innerText = "Welcome to DOM";
container.append(heading);
let para = document.createElement("p");
para.innerText = "This paragraph is created using JavaScript.";
container.append(para);

let img = document.createElement("img");
img.setAttribute("src","image.png");
container.append(img);
