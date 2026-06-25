//“Voy a montar un sistema que vigila la página”
export default function observer () {

    //Es la función que se ejecuta cuando algo aparece. 
    function loadElements(entradas) {
        
        //“Mira cada elemento que está entrando o saliendo de la pantalla”
        entradas.forEach((entrada) => {

        //“Si este elemento está visible en pantalla…”
        if (entrada.isIntersecting) {

            //“Dentro de ese elemento, busca todos los que tienen clase .fadeOut”
            const fadeOutElements = entrada.target.querySelectorAll(".fadeOut");

            fadeOutElements.forEach((elemet) => {
                elemet.classList.remove("fadeOut")
                elemet.classList.add("fadeIn");
            });
        }
    });
}

    //Es un “vigilante- Este vigilante está mirando elementos de la página y dice: “Avísame cuando algo aparezca en la pantalla del usuario”
    const observer = new IntersectionObserver(loadElements,{
        threshold: 0.1, //Activa cuando el 10% del elemento sea visible
    })

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        observer.observe(section);
        
    });

    console.log({sections});    
}
