import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom';



import { localStorageObj, localStorageSession } from '../../states/userStates'
import { chatRoomsAdmin } from '../../fetch/userFetch'
import { chatRoomsArray } from '../../states/chatRoomStates';
import { activeUpdate } from '../../fetch/chatRoomFetch';
import { BreadCrumbsTop } from './BreadCrumbsTop';
import { ChatRoomList } from './ChatRoomList';
import { BreadCrumbsGroup } from './BreadCrumbsGroup';
import { FormChatRoom } from './FormChatRoom';
import { tabAdmin } from '../../states/adminState';
import { MyProfile } from './MyProfile';

export const AdminDashboard = () => {

    const navigate = useNavigate();

    const [tab, setTab] = useRecoilState(tabAdmin)
    const [userForm, setUserForm] = useState(false)

    const [session, setSession] = useRecoilState(localStorageSession)


    const [chatRooms, setChatRooms] = useRecoilState(chatRoomsArray)
    const [userObj, setUserObj] = useRecoilState(localStorageObj);


    useEffect(() => {
        chatRoomsAdmin(session, setChatRooms, navigate, setUserObj)

    }, [])


    const checkboxActive = (room) => {

        const roomObj = {
            id: room.id,
            active: true
        }

        activeUpdate(roomObj, session, chatRooms, setChatRooms)
    }


    const handleTab = (tabNum) => {
        setTab(tabNum)
    }

    const viewForm = () => {
        setUserForm(!userForm)
    }

    return (

        <div className="p-3 m-1 bg-slate-900 container mx-auto   items-center relative z-10">
            <BreadCrumbsGroup
                handleTab={handleTab}
                tab={tab}
            />

            <div className="overflow-x-auto ">

                <small>


                    <span

                        className="text-purple-400 font-bold">

                        <p className='text-right'>
                            {
                                tab === 1 && 'Cuartos disponibles' ||
                                tab === 2 && 'Agregar cuarto' ||
                                tab === 3 && 'Usuarios' ||
                                tab === 4 && 'Agregar usuario' ||
                                tab === 5 && 'Mi perfil'
                            }


                        </p>

                    </span>
                </small>


                {
                    tab === 1 && (
                        <>

                            <ChatRoomList
                                checkboxActive={checkboxActive}
                            />
                        </>
                    ) || tab === 2 && (
                        <>

                            <FormChatRoom />
                        </>
                    ) || tab === 5 && (
                        <>

                            <MyProfile />
                        </>
                    )
                }

            </div>
        </div >
    )
}
