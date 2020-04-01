var myElement= document.querySelector(".circle");
myElement.addEventListener("animationstart",start,false);
myElement.addEventListener("animationiteration",update,false);
myElement.addEventListener("animationend",end,false);
function start(e){
    document.body.style.backgroundColor="pink";
}
function update(e){
    document.body.style.backgroundColor="steelblue";
}
function end(e){
    document.body.style.backgroundColor="rgb(0, 128, 68)";
}