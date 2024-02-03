import { urlBackLocal } from "../conts";

import axios from 'axios'

export const userSignInFetch = async (formData) => {


    const user = {
        user: {
            email: formData.email,
            password: formData.password
        }
    }

    try {
        const response = await axios.post(urlBackLocal + "/users/sign_in", user);

        // Si la solicitud es exitosa, puedes manejar la respuesta aquí
        console.log('Usuario autenticado:', response.data);
        const jwt = response.headers['authorization']
        localStorage.setItem('session', jwt)

        // Aquí podrías realizar alguna acción adicional, como redirigir a otra página
    } catch (error) {
        console.error('Error al intentar iniciar sesión:', error);
    }


};



