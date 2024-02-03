export const formatHour = (created_at) => {

    // Suponiendo que @objeto_rails.create_date es la fecha en tu objeto Rails
    const fechaRails = new Date(created_at);

    // Formatear la fecha en JavaScript con indicador AM/PM
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formatoHora = new Intl.DateTimeFormat('es-ES', options);

    const horaFormateada = formatoHora.format(fechaRails);
    return horaFormateada;
}


export const arrayRandom = (array) => {
    // Generar un índice aleatorio dentro del rango del array
    const indiceAleatorio = Math.floor(Math.random() * array.length);

    // Obtener el número correspondiente al índice aleatorio
    const numeroSeleccionado = array[indiceAleatorio];
    // console.log("numeroSeleccionado " + numeroSeleccionado)

    return numeroSeleccionado;
}

