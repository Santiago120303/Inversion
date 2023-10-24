function inversion(){

    //Capturamos los elementos de HTML que se van a utilizar
    const cNombres = document.getElementById("nombres").value;
    const cEmail = document.getElementById("email").value;
    const cMonto = document.getElementById("monto").value;
    const cTiempo = document.getElementById("tiempo").value;

    const preSimulacion = document.querySelector(".pre-simulation");
    const postSimulacion = document.querySelector(".post-simulation");

    const mostrarNombre = document.getElementById("nombresMostrar");
    const mostrarEmail = document.getElementById("emailMostrar");

    const mostrarTiempo = document.getElementById("tiempoMostrar");
    const mostrarPorcentaje = document.getElementById("porcentajeMostrar");

    const mostrarGanancia = document.getElementById("ganancia");
    const mostrarGananciaTotal = document.getElementById("gananciaTotal");

    let gananciaAñoUno = (parseInt(cMonto) * 0.008) * 12;
    let gananciaAñoDos = (parseInt(cMonto) * 0.013) * 24;
    let gananciaAñoTres = (parseInt(cMonto) * 0.017) * 36;

    let totalAñoUno = parseInt(cMonto) + gananciaAñoUno;
    let totalAñoDos = parseInt(cMonto) + gananciaAñoDos;
    let totalAñoTres = parseInt(cMonto) + gananciaAñoTres;

    postSimulacion.classList.remove("disabled");
    preSimulacion.classList.add("disabled");

    mostrarNombre.innerText = cNombres;
    mostrarEmail.innerText = cEmail;

    switch (cTiempo) {

        case "1":
            mostrarTiempo.innerText = "12 MESES";
            mostrarPorcentaje.innerText = "0.8%";
            mostrarGanancia.innerText = totalAñoUno;
            mostrarGananciaTotal.innerText = gananciaAñoUno;
            break;

        case "2":
            mostrarTiempo.innerText = "24 MESES";
            mostrarPorcentaje.innerText = "1.3%";
            mostrarGanancia.innerText = totalAñoDos;
            mostrarGananciaTotal.innerText = gananciaAñoDos;
            break;

        case "3":
            mostrarTiempo.innerText = "36 MESES";
            mostrarPorcentaje.innerText = "1.7%";
            mostrarGanancia.innerText = totalAñoTres;
            mostrarGananciaTotal.innerText = gananciaAñoTres;
            break;

    }

}