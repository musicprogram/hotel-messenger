import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { chatRoomsArray, objUpdateRoom, updateAccessLink } from '../../states/chatRoomStates'
import { FormUpdate } from './FormUpdate'
import { encryptAccessLink, formatDateSimple } from '../../utils'
import { updateAccessLinkFetch } from '../../fetch/chatRoomFetch'
import { localStorageSession } from '../../states/userStates'

export const ChatRoomList = ({ checkboxActive }) => {
    const [chatRooms, setChatRooms] = useRecoilState(chatRoomsArray)

    const [editChatRoom, setEditChatRoom] = useRecoilState(objUpdateRoom)

    const [accessLink, setAccessLink] = useRecoilState(updateAccessLink)
    const [session, setSession] = useRecoilState(localStorageSession)

    useEffect(() => {
        if (accessLink) {
            //console.log(accessLink)
            const id = accessLink.id.toString()
            const accessLinkEncrypt = encryptAccessLink(id, "hotelMessenger")

            const data = {
                id: accessLink.id,
                access_link: accessLinkEncrypt

            }
            updateAccessLinkFetch(data, session, chatRooms, setChatRooms)

        }
    }, [accessLink])



    const handleChatRoom = (room) => {
        //console.log(room)
        setEditChatRoom(room)
    }

    return (
        <table className="table  animate__animated animate__fadeIn">

            <tbody>

                {
                    chatRooms.length >= 1 && chatRooms.map((room, i) => {
                        return (
                            <>
                                <tr key={i} className='bg-slate-900 '>
                                    <th
                                        className="text-purple-800 ">
                                        <a
                                            onClick={() => handleChatRoom(room)}
                                            className="cursor-pointer flex" >
                                            <span className="text-2xl">
                                                {
                                                    room.name
                                                }
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6 my-1 ml-2">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                        </a>

                                        {
                                            editChatRoom && editChatRoom.id === room.id && (
                                                <>
                                                    <FormUpdate room={room} />
                                                </>
                                            )
                                        }

                                    </th>
                                    <th className='text-purple-400'>
                                        {
                                            formatDateSimple(room.day_start) + " "
                                        }
                                        /
                                        {
                                            " " + formatDateSimple(room.day_end)
                                        }
                                    </th>
                                    <th>
                                        {

                                            !room.active && (
                                                <>

                                                    <div className="form-control">


                                                        <label className="cursor-pointer label">
                                                            <a onClick={() => checkboxActive(room)}>
                                                                <svg

                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={1.5}
                                                                    stroke="currentColor"
                                                                    className="w-6 h-6">
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                                                </svg>
                                                            </a>

                                                        </label>
                                                    </div>

                                                </>
                                            )
                                        }

                                    </th>

                                </tr>
                            </>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
