export default function darkMode() {

  //1. Buscar el botón - Busca el botón del modo oscuro
  const $btnDarkMode = document.querySelector(
    ".nav__container--darkModeButton"
  );

<<<<<<< HEAD
  //2. Buscar el icono (luna / sol)- Busca el dibujito (🌙 o ☀️) dentro del botón
  const $icon = $btnDarkMode.querySelector(".fa-solid");

  //3. Mirar lo que el usuario había elegido antes Mira en la “memoria del navegador 2.Si no hay nada, usa "light"
  const theme = localStorage.getItem("theme") ?? "light";

  //Si el usuario había elegido oscuro:
=======
  const $icon = $btnDarkMode.querySelector(".fa-solid");
  const theme = localStorage.getItem("theme") ?? "light";

>>>>>>> 4fda60056066f7e0f8d02cf7f4fb1b096129fbd5
  if (theme === "dark") {
    $icon.classList.remove("fa-moon");
    $icon.classList.add("fa-sun");
    document.body.classList.add("dark");
<<<<<<< HEAD
  } 

  //Cuando el usuario pulsa el botón…
  $btnDarkMode.addEventListener("click", (e) => {

      //¿Antes estaba en modo oscuro? 1.true → estaba oscuro 2.false → estaba claro
    const isDark = localStorage.getItem("theme") === "dark";

    //Si había luna → pone sol - Si había sol → pone luna
    $icon.classList.toggle("fa-sun");
    $icon.classList.toggle("fa-moon");

    //Activa o desactiva el modo oscuro
    document.body.classList.toggle("dark");

    //Si antes era oscuro → guarda "dark" - Si no → guarda "light"
=======
  }

  // Registrar el evento click en el botón
  $btnDarkMode.addEventListener("click", (e) => {
    const isDark = localStorage.getItem("theme") === "dark";
    // Cambiamos el icono del elemento fa-solid a sun o moon según corresponda
    $icon.classList.toggle("fa-sun");
    $icon.classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
>>>>>>> 4fda60056066f7e0f8d02cf7f4fb1b096129fbd5
    localStorage.setItem("theme", isDark ? "light" : "dark");
  });
}
