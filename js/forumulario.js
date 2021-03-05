export default function validacionFormulario() {
    const $FORM = document.querySelector(".sign-in-form")
    const $IMPUT = document.querySelectorAll(".sign-in-form [required]")
    
    $IMPUT.forEach(function (element) {     
        const $SPAN = document.createElement("span")
        // relacionarlo al imput a traves de id
        $SPAN.id = element.name 
        // asiganarle el texto errors
        $SPAN.textContent = element.title

        $SPAN.classList.add("contact-form-error")

        // ubicacion
        element.insertAdjacentElement("afterend", $SPAN)
       
    } )

    document.addEventListener("keyup", function (e) {
        
        if(e.target.matches(".sign-in-form [required]")){
            
            let patter = e.target.pattern || e.target.dataset.pattern
            
            if(patter && e.target.value !==""){
                
                // new expresion regular
                let expReg = new RegExp(patter)
                
                return !expReg.exec(e.target.value)
                ? document.getElementById(e.target.name).classList.add("is-active-form")
                : document.getElementById(e.target.name).classList.remove("is-active-form")
            }
            if(e.target.value === ""){
                document.getElementById(e.target.name).classList.remove("is-active-form")
            }
            if(!patter){
                return e.target.value === ""
                ? document.getElementById(e.target.name).classList.add("is-active-form")
                : document.getElementById(e.target.name).classList.remove("is-active-form")
            }

        }
    })
    document.addEventListener("submit", function (e) {
        e.preventDefault()
    
        const $MESAGE = document.querySelector(".contact-form-response")

        setTimeout(() => {

            $MESAGE.classList.remove("none")
            $FORM.nombre.value = ""
            $FORM.correo.value = ""
            $FORM.telefono.value = ""
        }, 2000);

    })



    
     
}