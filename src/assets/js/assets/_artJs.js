

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

const elementoHtmlBoton = document.querySelector("#boton")

elementoHtmlBoton.addEventListener("click", function() {
    elementoHtmlBoton.style.backgroundColor = "pink"
    elementoHtmlBoton.style.color = "green"
})



//boton normal


const botones = document.querySelectorAll(".boton")

botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
        boton.style.backgroundColor = "pink"
        boton.style.color = "green"
    })
})

