//export- Oye, otros archivos pueden usar mi máquina. default- Es la exportación principal del archivo. 
export default function modal (template) {
    const $modal = document.createElement("div");
    $modal.id = ("modal");

    $modal.innerHTML= 
        `<div class="modal__container">
            <div class="modal_header">
                <span class= "modal--btn-close">
                    <i class="fa-solid fa-xmark secondary"></i>
                </span>
            </div>
            <div class="modal__body">
            ${template}
        </div>

    </div>
`;
    // Buscar el botón de cerrar - querySelector- Busca dentro de la caja el elemento que tenga la clase modal--btn-close
    const $btnClose = $modal.querySelector(".modal--btn-close")
    const $modalContainer = $modal.querySelector(".modal__container")

    //2. Esperar a que hagan clic- modal remove: "Cuando hagan clic, elimina el modal."
    $btnClose.addEventListener("click" , () => $modal.remove());


    //Escuchar clics en todo el modal- que es event? Cuando haces clic, JavaScript guarda información.
    $modal.addEventListener("click", (event) => {
        //"El elemento exacto sobre el que hiciste clic." 
        if(event.target.closest("[data-modal-close]")){ 
            $modal.remove()

        }

        if(!$modalContainer.contains(event.target)){
            $modal.remove()
        }

    });
    
    //para cargarlo en cualquier parte de la página
    return $modal;
}

//Usuario hace clic

     //  │

    //   ▼

//¿Dónde hizo clic?

    //   │

    //   ▼

//¿Fue en el botón de cerrar?

      // │
   //Sí ───────► Elimina el modal

   //No ───────► No hace nada


