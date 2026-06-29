export default function validationForm(){

    //selecionamos el formulario por etiqueta
    const messagesError={
        name : "El nombre debe contener solo letras y 3 digitos",
    }

    document.addEventListener("submit", (event)=>{

        //no hace el recargo de pagina
        event.preventDefault();
        
        const $form = event.target;

        const $inputs = $form.querySelectorAll("input");
        
        
        $inputs.forEach(input => {
            const pattern = new RegExp(input.pattern);
            const $span = document.createElement("span");
            $span.innerText = messagesError[input.name];
                
            
                if(!pattern.exec(input.value)) {
                    input.insertAdjacentHTML("beforebegin,$span");
                }

            console.log(pattern)
        });

    });
}