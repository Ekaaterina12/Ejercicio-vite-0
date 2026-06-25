export default function ScrollTop() {

    const nav= document.querySelector(".navbar")

    window.addEventListener("scroll", () => {

        const scrollTop = document.documentElement.scrollTop;

        if (scrollTop > 800) {

            nav.style.backgroundColor = "red"
            nav.classList.remove("bg-body-tertiary")
            

        } else {

            nav.classList.add("bg-body-tertiary")
            
        }

    });



}

