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



    $modal.addEventListener("click", (event) => {

        const $btnClose = $modal.querySelector(".modal--btn-close")
        
        $btnClose.addEventListener("click" , () => $modal.remove());
        return $modal

        

        
        
    });
    
    //para cargarlo en cualquier parte de la página
    return $modal;
}


