const nav = document.querySelector ("#nav");
const abir= document.querySelector ("#abir");
const cerrar= document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add ("visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove ("visible");
})