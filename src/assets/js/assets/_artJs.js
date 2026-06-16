

let mivariable
let miotravariable

const miValorInalterable = "cualquiercosa"

mivariable = "katy"
miotravariable = "goncha"

let num1 = 10
let num2 = 8
let resultado = num1 + num2

console.log(mivariable + " " + miotravariable)
console.log(resultado)

//const elementoHtmlBoton = document.querySelector("#boton")

// elementoHtmlBoton.addEventListener("click", function() {
//     elementoHtmlBoton.style.backgroundColor = "pink"
//     elementoHtmlBoton.style.color = "green"
// })



// //boton normal


// const botones = document.querySelectorAll(".boton")

// botones.forEach(function(boton) {
//     boton.addEventListener("click", function() {
//         boton.style.backgroundColor = "pink"
//         boton.style.color = "green"
//     })
// })


let botones = document.querySelectorAll(".boton");

botones.forEach((boton) => {

    boton.addEventListener("click", (e) => {

        // Reseteo todos los botones
        botones.forEach((boton) => {
            boton.style.backgroundColor = "#c4b2d3"
            boton.style.border = "2px dashed #a894b8"
            boton.style.color = "white"
        });

        // Aplico estilos al botón pulsado
        e.currentTarget.style.border = "2px solid green"
        e.currentTarget.style.backgroundColor = "pink"
        e.currentTarget.style.color = "green"

    })

})


const botonesDesplegar = document.querySelectorAll(".botonDesplegable")

const parrafoADesplegar = document.querySelector(".desplegable")

botonesDesplegar.forEach((item) => {

    item.addEventListener("click", () => {

        const miParrafo = item.previousElementSibling
        
        miParrafo.classList.toggle("open")

        
        item.textContent = miParrafo.classList.contains("open") ? "leer menos" : "leer más"

            
            

    })

})