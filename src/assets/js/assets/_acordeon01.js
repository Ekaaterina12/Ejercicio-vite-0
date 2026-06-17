export function acordeon01(){
    console.log("entramos")
}

document.querySelectorAll(".boton").forEach((btn) => {
    btn.addEventListener("click", () => {

        const parrafo = btn.parentElement.querySelector(".parrafo");

        parrafo.classList.toggle("open");

        btn.textContent = parrafo.classList.contains("open")
            ? "leer menos"
            : "leer más";
    });
});