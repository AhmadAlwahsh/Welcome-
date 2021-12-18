let icons = document.querySelectorAll(".header .container ul li")


icons.forEach(function(ele){
    ele.onclick = function(ele){
        icons.forEach(function(ele){
            ele.classList.remove("active")
        })
        this.classList.add("active");
    }
})

let btn = document.querySelector("button");

window.onscroll = function () {
    if (window.scrollY >= 500) {
        btn.style.opacity = "1";
    } else {
        btn.style.opacity = "0";
    }
};

btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
    });
};

let home = document.querySelector("div");

let overlay = document.getElementById("overlay");

let mainDiv = document.createElement("div")
let box = document.createElement("div")
let tit = document.createElement("h3")
let titText = document.createTextNode(": Choose A Color")
let colorBox = document.createElement("div");
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let btn3 = document.createElement("button");
let clr1 = document.createElement("h4");
let clr1Text = document.createTextNode("Gold")
let clr2 = document.createElement("h4");
let clr2Text = document.createTextNode("Red")
let clr3 = document.createElement("h4");
let clr3Text = document.createTextNode("Blue")

document.body.appendChild(mainDiv);
mainDiv.appendChild(box);
box.appendChild(tit);
tit.appendChild(titText);
box.appendChild(colorBox);
colorBox.appendChild(btn1);
colorBox.appendChild(btn2);
colorBox.appendChild(btn3);
btn1.appendChild(clr1);
btn2.appendChild(clr2);
btn3.appendChild(clr3);
clr1.appendChild(clr1Text);
clr2.appendChild(clr2Text);
clr3.appendChild(clr3Text);

mainDiv.classList.add("colorChoosing");
box.classList.add("bx");
tit.classList.add("tit");
colorBox.classList.add("colorBox");
btn1.classList.add("btn1");
btn2.classList.add("btn2");
btn3.classList.add("btn3");


btn1.onclick = function(){
    document.documentElement.style.setProperty(`--sec-color` , `#ffb400`);
    mainDiv.style.display = "none";
    home.style.display = "block";
}

btn2.onclick = function(){
    document.documentElement.style.setProperty(`--sec-color` , `#fd6464`);
    mainDiv.style.display = "none";
    home.style.display = "block";
}

btn3.onclick = function(){
    document.documentElement.style.setProperty(`--sec-color` , `#5ed9ff`);
    mainDiv.style.display = "none";
    home.style.display = "block";
}

let land = document.getElementById("landing");
let about = document.getElementById("about");
let head = document.getElementById("head")


setTimeout(fade , 2000);

function fade() {
    land.style.opacity = "1";
    head.style.opacity = "1";
}

window.onscroll = function(){
    if (window.scrollY >= 600) {
        about.style.opacity = "1";
    }else{
        about.style.opacity = "0";
    }
}
