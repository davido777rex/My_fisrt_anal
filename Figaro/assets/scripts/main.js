let close = document.querySelectorAll(".close, .segundaTarjeta");

let content = document.querySelector(".content")
close.forEach(function(recorrer) {

    recorrer.addEventListener("click", function(ev) {
        ev.preventDefault();
        console.log(content);
        content.classList.remove("rollIn")
        content.classList.add("rollOut")

        setTimeout(() => {
            location.href = recorrer.getAttribute("href");
        }, 600);
    })
})


// let iconos = document.querySelectorAll("i");
// iconos.forEach(function(icono) {
//     icono.classList.remove("fa-lemon")
//     icono.classList.add("fa-star")
// })



// recorrelos
// agregar evento click a cada uno de ellos
// console.log(links);
// console.log(links[2
