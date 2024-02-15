import axios from "axios";
import { urlBackLocal } from "../conts";



export const activeUpdate = async (chat_room, session, chatRooms, setChatRooms) => {


    try {
        const url = urlBackLocal + "/chat_rooms/" + chat_room.id + "/update_active"
        const response = await axios.post(url, chat_room, {
            headers: {
                'Authorization': session,
                'Content-Type': 'application/json',
            }
        },);
        let updateObj = chatRooms.map(objeto => (objeto.id === response.data.id ? response.data : objeto));
        setChatRooms(updateObj)

        // Aquí podrías realizar alguna acción adicional, como redirigir a otra página
    } catch (error) {
        console.error('Error al intentar iniciar sesión:', error);
    }


};



export const createChatRoom = async (chat_room, session, chatRooms, setChatRooms, setTab, setEditChatRoom, setAccessLink, toast) => {


    try {
        const url = urlBackLocal + "/chat_rooms/"
        const response = await axios.post(url, chat_room, {
            headers: {
                'Authorization': session,
                'Content-Type': 'application/json',
            }
        },);
        console.log(response.data)
        setAccessLink(response.data)
        const newRoom = [...chatRooms, response.data]
        setChatRooms(newRoom)
        setTab(1)
        setEditChatRoom(null)
        toast.success(`se creo ${response.data.name}`)
        // Aquí podrías realizar alguna acción adicional, como redirigir a otra página
    } catch (error) {
        //console.error('Error al intentar chat_rooms:', error);

        error.response.data.errors.map((err) => {
            return toast.error(err)
        })

    }


};

export const updateChatRoom = async (room, session, chatRooms, setChatRooms, toast, setEditChatRoom) => {

    const chat_room = {
        chat_room: {
            name: room.name,
            day_start: room.day_start,
            day_end: room.day_end
        }
    }

    try {
        const url = urlBackLocal + "/chat_rooms/" + room.id
        const response = await axios.patch(url, chat_room, {
            headers: {
                'Authorization': session,
                'Content-Type': 'application/json',
            }
        },);
        const objUpdate = response.data

        const updateArray = chatRooms.map((room) => {
            if (room.id === objUpdate.id) {
                return objUpdate
            } else {
                return room
            }
        })
        setChatRooms(updateArray)
        toast.success(`se actualiza ${response.data.name}`)
        setEditChatRoom(null)
        // Aquí podrías realizar alguna acción adicional, como redirigir a otra página
    } catch (error) {
        error.response.data.error.map((err) => {
            return toast.error(err)
        })
    }


};



export const updateAccessLinkFetch = async (room, session, chatRooms, setChatRooms) => {

    const chat_room = {
        chat_room: {
            access_link: room.access_link
        }
    }

    try {
        const url = urlBackLocal + "/chat_rooms/" + room.id
        const response = await axios.patch(url, chat_room, {
            headers: {
                'Authorization': session,
                'Content-Type': 'application/json',
            }
        },);
        const objUpdate = response.data
        const updateArray = chatRooms.map((room) => {
            if (room.id === objUpdate.id) {
                return objUpdate
            } else {
                return room
            }
        })
        setChatRooms(updateArray)

        // Aquí podrías realizar alguna acción adicional, como redirigir a otra página
    } catch (error) {
        console.error('Error al intentar actualizar chat_rooms:', error);
    }


};
