<<<<<<< HEAD
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
=======
export default function observer() {
  function loadElements(entradas) {
    // Recorremos las entradas observada por el observer
    entradas.forEach((entrada) => {
      //Comprobar si la section ha sido intersectada
      if (entrada.isIntersecting) {
        //Seleccionamos todos los elementos con la clase fadeOut
        const fadeOutElements = entrada.target.querySelectorAll(".fadeOut");
        // Los recorremos
        fadeOutElements.forEach((element) => {
          // Quitamos la clase fadeOut y agregamos la fadeIN
          element.classList.remove("fadeOut");
          element.classList.add("fadeIn");
        });
      }
    });
  }
  //Creamos la instancia del observador y su configuración
  const observador = new IntersectionObserver(loadElements, {
    threshold: 0.1,
  });
  // Selecionamos las sections para ser observadas
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    // Le decimos al observador que observe cada section
    observador.observe(section);
  });
}
>>>>>>> 4fda60056066f7e0f8d02cf7f4fb1b096129fbd5
