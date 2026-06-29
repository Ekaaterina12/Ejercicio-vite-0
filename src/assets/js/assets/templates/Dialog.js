

export default function Dialog(id){

    if(id==1){

    return`


        <div class = "Dialog"> 
            
        <h3> Hola que tal todo??? </h3>

        <img class="img-fluid" src="https://picsum.photos/seed/picsum/400/400" alt="">

        <button class="btn btn-primary" type="button" data-modal-close>acepatar</button>

        <button class="btn btn-outline-primary" type="button" data-modal-close>acepatar</button>

        </div> 

    `;

    }

    else if (id==2){

    return`


        <div class = "Dialog"> 
            
        <h3> WORDPRESS EL MEJOR </h3>

        <img class="img-fluid" src="https://picsum.photos/seed/picsum/400/400" alt="">

        <button class="btn btn-primary" type="button" data-modal-close>acepatar</button>

        <button class="btn btn-outline-primary" type="button" data-modal-close>acepatar</button>

        </div> 

    `;

    }

    
    else {

    return`


        <div class = "Dialog"> 
            
        <h3> Plantas</h3>

        <img class="img-fluid" src="https://picsum.photos/seed/picsum/400/400" alt="">

        <button class="btn btn-primary" type="button" data-modal-close>acepatar</button>

        <button class="btn btn-outline-primary" type="button" data-modal-close>acepatar</button>

        </div> 

    `;

    }
}