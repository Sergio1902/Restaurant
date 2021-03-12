const $open = document.querySelector(".btn-reservar")
const $container = document.querySelector(".container-popud-global")
const $popud = document.querySelector(".container-popud")
const $body = document.querySelector("body")

document.addEventListener("click", function (e) {
    if(e.target === $open){
        $container.classList.add('show'); 
        $popud.classList.add("block")
        $body.classList.add("block-scroll")
    }
    if(e.target === $container){
        $container.classList.remove('show');
        $popud.classList.remove("block")
        $body.classList.remove("block-scroll")
    }
})
document.addEventListener("keyup",function (e) {
    if(e.key === "Escape"){
        $container.classList.remove('show');
        $popud.classList.remove("block")
        $body.classList.remove("block-scroll")
    }
    
})