export default function loadImage(){
    const $container= document.querySelector(".navbar-brand")
    const $image = document.querySelector("img")

    setInterval(()=>{
            $image.src="https://picsum.photos/50/50"
    },1000)

}