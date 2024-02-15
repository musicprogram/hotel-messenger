import CryptoJS from 'crypto-js';


export const formatHour = (created_at) => {

    // Suponiendo que @objeto_rails.create_date es la fecha en tu objeto Rails
    const fechaRails = new Date(created_at);

    // Formatear la fecha en JavaScript con indicador AM/PM
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formatoHora = new Intl.DateTimeFormat('es-ES', options);

    const horaFormateada = formatoHora.format(fechaRails);
    return horaFormateada;
}

export const formatDateSimple = (date) => {

    // Extraer los componentes de la fecha
    let partesFecha = date.split(' ');
    const day = partesFecha[2]
    const month = partesFecha[1]
    const myDate = day + " " + month

    return myDate

}


export const arrayRandom = (array) => {
    // Generar un índice aleatorio dentro del rango del array
    const indiceAleatorio = Math.floor(Math.random() * array.length);

    // Obtener el número correspondiente al índice aleatorio
    const numeroSeleccionado = array[indiceAleatorio];
    // console.log("numeroSeleccionado " + numeroSeleccionado)

    return numeroSeleccionado;
}


export const encryptAccessLink = (data, secretKey) => {
    return CryptoJS.AES.encrypt(data, secretKey).toString();
};



export const encryptData = (data, secretKey) => {
    const encrypted = CryptoJS.AES.encrypt(data, secretKey).toString();
    localStorage.setItem('user', encrypted);
};

// Función para descifrar datos
export const decryptData = (data, secretKey) => {
    const bytes = CryptoJS.AES.decrypt(data, secretKey);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return decrypted
};
