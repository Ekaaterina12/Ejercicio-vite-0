//1.Aquí estamos creando una función llamada topBottom. Piensa en ella como una máquina que construye un botón especial.
export default function topBottom() {

  //La máquina fabrica un botón nuevo.
  const $btnTop = document.createElement("button");

  //Le ponemos dos etiquetas (clases): 1.fab-button: para darle estilo (color, tamaño, posición, etc.). 2. hidden: para que empiece escondido.
  $btnTop.className = "fab-button hidden";

  //Si me pulsas, subiras arriba
  $btnTop.innerHTML = `
    <i class="fa-solid fa-arrow-up"></i>
  `;

  //Cuando alguien haga clic en el botón...
  $btnTop.addEventListener("click", (e) => {
    //La página se mueve hasta arriba. top: 0 = ve al inicio. behavior: "smooth" = sube despacito y bonito, no de golpe. "window.scrollto Cada vez que la persona suba o baje la página..."
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {

    //¿Cuántos píxeles ha bajado el usuario? 0 = está arriba del todo.
    //300 = ha bajado un poco.
    //1000 = ha bajado bastante.
    const scrollTop = document.documentElement.scrollTop;

      //Si ha bajado más de 600 píxeles...
    if (scrollTop > 600) {

      //Quitamos la etiqueta de "escondido" y le ponemos la de "mostrar".
      $btnTop.classList.remove("hidden");
      $btnTop.classList.add("show");

      //Si no ha bajado tanto...
    } else {

      //Volvemos a esconder el botón.
      $btnTop.classList.add("hidden");
      $btnTop.classList.remove("show");
    }
  });

  //La máquina entrega el botón ya preparado para usarlo en la página.
  return $btnTop;
}
