import btnHamburguesa from "./btn_hamburguesa.js"
import validacionFormulario from "./forumulario.js"
import ORDER from "./order.js"
import slider from "./slider.js"

document.addEventListener("DOMContentLoaded", function (e) {
    slider(".next",".previ",".slider")
    btnHamburguesa()
    ORDER()
    validacionFormulario()

    
     
})

