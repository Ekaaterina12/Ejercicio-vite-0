export default function darkMode() {

  //1. Buscar el botón - Busca el botón del modo oscuro
  const $btnDarkMode = document.querySelector(
    ".nav__container--darkModeButton"
  );

  const $icon = $btnDarkMode.querySelector(".fa-solid");
  const theme = localStorage.getItem("theme") ?? "light";

  if (theme === "dark") {
    $icon.classList.remove("fa-moon");
    $icon.classList.add("fa-sun");
    document.body.classList.add("dark");
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
    localStorage.setItem("theme", isDark ? "light" : "dark");
  });
}
