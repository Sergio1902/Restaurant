import btnHamburguesa from "./btn_hamburguesa.js"
import slider from "./slider.js"

document.addEventListener("DOMContentLoaded", function (e) {
    slider(".next",".previ",".slider")
    btnHamburguesa()

    // $(document).ready(function(){
        $('.btn-reservar').magnificPopup({   
                                         })
        $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();       
        });
    // });

})

