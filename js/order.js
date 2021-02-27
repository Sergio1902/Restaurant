export default function ORDER() {
    const $CONTENT = document.querySelectorAll(".content-description .img")
    
    window.addEventListener("resize", function(){   
        if(window.outerWidth < 680){    
            $CONTENT[0].classList.add("order-card")
            $CONTENT[1].classList.add("none")

        }else{
            $CONTENT[0].classList.remove("order-card")
            $CONTENT[1].classList.remove("none")
        }
    });
  
    
}