import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom';



import { localStorageSession } from '../../states/userStates'
import { chatRoomsAdmin } from '../../fetch/userFetch'
import { chatRoomsArray } from '../../states/chatRoomStates';

export const AdminDashboard = () => {

    const navigate = useNavigate();


    const [session, setSession] = useRecoilState(localStorageSession)


    const [chatRooms, setChatRooms] = useRecoilState(chatRoomsArray)


    useEffect(() => {
        chatRoomsAdmin(session, setChatRooms, navigate)

    }, [])

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            chatRooms.map((room) => {
                                return (
                                    <>
                                        <tr>
                                            <th>
                                                {
                                                    room.name
                                                }
                                            </th>

                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
