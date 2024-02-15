import React, { useEffect, useState } from 'react'
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
import toast from 'react-hot-toast';


import { createChatRoom } from '../../fetch/chatRoomFetch';
import { useRecoilState } from 'recoil';
import { localStorageSession } from '../../states/userStates';
import { obtenerHoraAmPm } from '../../functions/function_1';
import { chatRoomsArray, objUpdateRoom, updateAccessLink } from '../../states/chatRoomStates';
import { tabAdmin } from '../../states/adminState';
import { encryptAccessLink } from '../../utils';

export const FormChatRoom = () => {

    const [value, onChange] = useState([new Date(), new Date()]);
    const [name, setName] = useState('');
    const [active, setActive] = useState(false);
    const [session, setSession] = useRecoilState(localStorageSession)
    const [chatRooms, setChatRooms] = useRecoilState(chatRoomsArray)
    const [tab, setTab] = useRecoilState(tabAdmin)
    const [editChatRoom, setEditChatRoom] = useRecoilState(objUpdateRoom)


    const [accessLink, setAccessLink] = useRecoilState(updateAccessLink)





    const handleSubmit = () => {
        let data = {}

        if (value) {
            const hour = obtenerHoraAmPm(value[0])
            data = {
                'name': name,
                'active': active,
                'day_start': value[0].toString(),
                'day_end': value[1].toString(),
                'hour': hour
            }

        } else {
            data = {
                'name': name,
                'active': active,
            }
        }


        //console.log(data)

        const chat_room = {
            "chat_room": data
        }

        createChatRoom(chat_room, session, chatRooms, setChatRooms, setTab, setEditChatRoom, setAccessLink, toast)
    }

    return (
        <div>
            <div className="container">

                <div>
                    <label htmlFor="name" className="block py-4  font-medium leading-6 text-gray-100 text-2xl">
                        <span className="text-2xl text-purple-400">
                            Nombre del cuarto
                        </span>
                    </label>
                    <div className="mt-2">
                        <input
                            id="name"
                            name="name"
                            type="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoComplete="name"
                            className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-purple-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>



                <div>
                    <label htmlFor="date" className="block py-4 font-medium leading-6 text-gray-100 text-2xl">
                        <span className="text-2xl text-purple-400">
                            Empieza y termina
                        </span>
                    </label>
                    <div className="mt-2">
                        <DateTimeRangePicker

                            onChange={onChange}
                            value={value} />
                    </div>
                </div>

                <div>
                    <label htmlFor="active" className="block py-4  font-medium leading-6 text-gray-100 text-2xl">
                        <span className="text-2xl text-purple-400">
                            Cuarto activo
                        </span>
                    </label>
                    <div className="mt-2">
                        <input
                            onChange={() => setActive(!active)}
                            type="checkbox"
                            checked={`${active ? 'checked' : ''}`}
                            className="checkbox" />
                    </div>
                </div>




                <div className="py-5 flex justify-between">
                    <button
                        onClick={handleSubmit}
                        className="text-purple-300 font-bold flex">
                        <span className="text-2xl">
                            Guardar
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                        </svg>
                    </button>


                </div>
            </div>
        </div>
    )
}
