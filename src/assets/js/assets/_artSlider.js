export default function artSlider() {

    //"Busca todos los trenes."
    const $carrousel = document.querySelectorAll(".artSlider01");


    //"Voy a coger cada tren uno por uno."
    $carrousel.forEach(($el) => {

        //Buscar la ventana
        const $visor = $el.querySelector(".artSlider01__visor");

        const $dots = $el.querySelectorAll(".artSlider01__track__dot");
        console.log ($dots)

        //Buscar los vagones
        const $pista = $el.querySelector(".artSlider01__pista");

        //Contar cuántos vagones hay
        const $sliders = $pista.querySelectorAll(".artSlider01_slide");

        // Si no hay pista o no hay fotos, nos salimos
        if (!$pista || $sliders.length === 0) return;

        //contador-empieza en el slider 0
        let contador = 0;

        const tiempoTransicion = 500;

        //8. Definimos el tiempo
        const tiempoEspera = 3000;



        //“Voy a mirar todas las fotos una por una.” Para que el carrusel parezca infinito.
         $sliders.forEach(($slide) => {

            //“Haz una copia EXACTA de esta imagen.”
            const  $copia = $slide.cloneNode(true);

            //La copia se guarda en una variable. “Añade la copia al final de la fila.”
            $pista.appendChild($copia);
          })

          console.log({tiempoEspera, tiempoTransicion})
        //Eerar 3 segundos
         setInterval(() => {
            console.log(`contador: ${contador}`);
            console.log(`tiempo: ${(tiempoEspera * contador) / 1000}s`);
            //Mover el dedo
            contador++;

            $pista.style.transform = `translateX(-${100 * contador}%)`;
            
            //“Cada vez que cambie el transform, hazlo suave durante X ms”
            $pista.style.transition = `transform ${tiempoTransicion}ms`;

            $dots[contador -1]?.classList.remove("active");
            if ($dots[contador]){
                $dots[contador].classList.add("active");
            } else {
                $dots[0].classList.add("active");
            }


            //pieza rápido y termina lento
           // $pista.style.transition = `transform 500ms ease-out`;

            //hay que validar el contenedor sea igual  al numero  de la ultima  posicion de sliders 
         
            if(contador === $sliders.length ){
                setTimeout(() =>{
                    console.log(`patata`)
                    contador = 0;
                    $pista.style.transform = `translateX(0)`;
                    $pista.style.transition = "none";
                    console.log("out")
                }, tiempoTransicion)
            }

            // Reiniciar  la posicion  del vidor  para mostrar el primer slider

        },tiempoEspera);



    });

    
    //resumen:
    //1. Cogemos todos los carruseles
    //2.Vamos carrusel por carrusel
    //3.Dentro de cada carrusel buscamos la ventana
    //4.Buscamos la pista (donde están las imágenes)
    //5.Buscamos todas las imágenes



}

