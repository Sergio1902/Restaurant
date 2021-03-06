export default function btnHamburguesa() {

    const $PANEL = document.querySelector(".panel-flotante")

    document.addEventListener("click",function (e) {
         if(e.target.matches(".hamburguesa") || e.target.matches(`.hamburguesa *`)){
             $PANEL.classList.toggle("is-active-panel")
             document.querySelector(".hamburguesa").classList.toggle("is-active")

        }       
        if(e.target.matches(".panel-flotante-menu .menu-items a")){
            $PANEL.classList.remove("is-active-panel")
            document.querySelector(".hamburguesa").classList.remove("is-active")
        }
    })
    
    // RESPONSIVE - PANEL FLOTANTE
    let breakPoint = window.matchMedia("(min-width:1041px)")

    // funcion expresada
    const responsive = function (e) {
        if(e.matches){
            $PANEL.classList.remove("is-active-panel")
            
        }
    }
// add listener - utilizado solo en medias querys
        breakPoint.addListener(responsive)

}