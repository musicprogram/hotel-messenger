import { secretKeyLocalHost, urlBackLocal } from "../conts";


import axios from 'axios'
import { encryptData } from "../utils";


export const userSignInFetch = async (formData, navigate, setUserMain) => {


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
        localStorage.setItem('session', jwt) //jwt de session

        const userSession = response.data.status.data
        setUserMain(userSession)
        const userSessionString = JSON.stringify(userSession)

        encryptData(userSessionString, secretKeyLocalHost) // encriptar informacion dle usuario local 
        navigate("/admin")

        // Aquí podrías realizar alguna acción adicional, como redirigir a otra página
    } catch (error) {
        console.error('Error al intentar iniciar sesión:', error);
    }


};


export const chatRoomsAdmin = async (session, setChatRooms, navigate) => {


    try {
        const axiosInstance = axios.create({
            baseURL: urlBackLocal + "/chat_rooms",
            headers: {
                'Authorization': session,
                'Content-Type': 'application/json',  // Ajusta según los requisitos de tu API
            },
        })

        // Realizar la solicitud GET
        axiosInstance.get('')
            .then(response => {
                // Manejar los datos obtenidos
                setChatRooms(response.data)
            })
            .catch(error => {
                //console.error('Error al obtener datos:', error);
                navigate("/");
            });

        // Aquí podrías realizar alguna acción adicional, como redirigir a otra página
    } catch (error) {
        console.error('No tienes acceso a esta información');
    }


};



