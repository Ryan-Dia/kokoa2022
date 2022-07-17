var elem = document.querySelector("video");
var img = document.querySelector("img")

elem.onended = function(){
    elem.classList.add("toss-video__hidden")
    img.classList.remove("toss-img__enabled")
}

