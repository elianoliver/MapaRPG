// PEGANDO MAPA
const map = document.querySelector("map");

map.addEventListener("click", function (event) {
    const target = event.target;

    if (target.nodeName === "AREA") {
        const name = target.getAttribute("alt");
        console.log("Você clicou na coordenada:", name);
    }
})

