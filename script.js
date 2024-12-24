function mostrarAnillo() {
    const anillo = document.getElementById("anillo");
    anillo.classList.remove("anillo-oculto");
    anillo.classList.add("anillo-visible");

    setTimeout(() => {
        alert("¡Gracias por aceptar! Este anillo es el comienzo de nuestra aventura juntos ❤️");
    }, 2000);
}
