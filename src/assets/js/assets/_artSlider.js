export default function artSlider() {
    const $carrousel = document.querySelectorAll(".artSlider01");


    $carrousel.forEach(($el) => {

        const $visor = $el.querySelector(".artSlider01__visor");
        const $pista = $el.querySelector(".artSlider01__pista");

        const $sliders = $pista.querySelectorAll(".artSlider01_slide");

        // Comprobar que existan
        if (!$pista || $sliders.length === 0) return;

        //contador-empieza en el slider 0
        let contador = 0;

        const tiempoTransicion = 500;
        const tiempoEspera = 3000;




        $sliders.forEach(($slide) => {
            console.log($slide);
         })

         setInterval(() => {
            console.log(`contador: ${contador}`);
            console.log(`tiempo: ${(tiempoEspera * contador) / 1000}s`);

            contador++;
        },tiempoEspera);

    });

    

}

