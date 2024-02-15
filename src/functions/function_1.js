export const obtenerHoraAmPm = (fechaActual) => {

    let horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const amPm = horas >= 12 ? 'PM' : 'AM';

    // Ajustar las horas para el formato de 12 horas
    horas = horas % 12 || 12;

    // Formatear los minutos con ceros a la izquierda si es necesario
    const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos;

    // Construir la cadena de tiempo en formato AM/PM
    const horaAmPm = `${horas}:${minutosFormateados} ${amPm}`;

    return horaAmPm;
};
