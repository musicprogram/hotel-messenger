import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import toast from 'react-hot-toast';

import { chatRoomsArray, objUpdateRoom } from '../../states/chatRoomStates'
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker'
import { updateChatRoom } from '../../fetch/chatRoomFetch'
import { localStorageSession } from '../../states/userStates'

export const FormUpdate = ({ room }) => {
    const [editChatRoom, setEditChatRoom] = useRecoilState(objUpdateRoom)
    const [session, setSession] = useRecoilState(localStorageSession)
    const [chatRooms, setChatRooms] = useRecoilState(chatRoomsArray)


    const [date, setDate] = useState(null);


    useEffect(() => {
        setDate([new Date(room.day_start), new Date(room.day_end)])
    }, [room])



    const handleUpdateRoom = () => {
        const chatRoom = {
            id: editChatRoom.id,
            name: editChatRoom.name,
            day_start: date[0].toString(),
            day_end: date[1].toString()
        }

        updateChatRoom(chatRoom, session, chatRooms, setChatRooms, toast, setEditChatRoom)
    }

    return (
        <>
            <div className="bg-purple-50 pl-4 pr-4">

                <div className="mt-2 py-5">
                    <input
                        id="name"
                        name="name"
                        type="name"
                        value={editChatRoom.name}
                        onChange={(e) => {
                            const objUp = { ...editChatRoom }
                            objUp.name = e.target.value
                            setEditChatRoom(objUp)
                        }}
                        autoComplete="name"
                        className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-purple-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                <div className="py-5">
                    <DateTimeRangePicker
                        onChange={setDate}
                        value={date} />
                </div>
                <div className="py-5">
                    <a
                        onClick={handleUpdateRoom}
                        className="cursor-pointer flex">
                        <span className='text-xl'>
                            Actualizar
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 ml-2 my-1">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </a>
                </div>

            </div>

        </>
    )
}
