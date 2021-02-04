export default function slider(btnNext, btnPreviw, banner) {
    
    const $SIGUIENTE = document.querySelector(btnNext)
    const $ANTERIOR = document.querySelector(btnPreviw)
    const $BANNER = document.querySelectorAll(banner)
    console.log($BANNER)

    let i = 0

    document.addEventListener("click", function (e) {
        if(e.target === $SIGUIENTE){
            e.preventDefault()
            // si el valor es 0
            $BANNER[i].classList.remove("active")
            i--
            if(i<0){
                i = $BANNER.length - 1
            }
            $BANNER[i].classList.add("active")
        }
        if(e.target === $ANTERIOR){
            e.preventDefault()
              // si el valor es 0
              $BANNER[i].classList.remove("active")
              i++
              if(i >= $BANNER.length){
                i = 0
              }
              $BANNER[i].classList.add("active")
              
        }
    })
}