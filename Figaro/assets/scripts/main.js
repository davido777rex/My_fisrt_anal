let close = document.querySelectorAll(".close");
let content = document.querySelector(".content")
close.forEach(function(recorrer) {

    recorrer.addEventListener("click", function(ev) {
        ev.preventDefault();
        console.log(content);
        content.classList.remove("rollIn")
        content.classList.add("rollOut")

        setTimeout(() => {
            location.href = "../index.html";
        }, 700);
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