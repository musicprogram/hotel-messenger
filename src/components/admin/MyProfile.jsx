import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { myProfileData } from '../../fetch/userFetch'
import { localStorageObj, localStorageSession, modalUserSign } from '../../states/userStates'
import { useRecoilState } from 'recoil'
import { myProfile } from '../../states/adminState'

export const MyProfile = () => {
    const [session, setSession] = useRecoilState(localStorageSession)
    const [profile, setProfile] = useRecoilState(myProfile)
    const [userObj, setUserObj] = useRecoilState(localStorageObj);
    const [visible, setVisible] = useRecoilState(modalUserSign);

    const navigate = useNavigate();

    useEffect(() => {
        myProfileData(session, setProfile)
    }, [])


    const handleCloseSession = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("session");
        setSession('')
        setUserObj(null)
        navigate("/")
        toast('Fue un placer, nos vemos pronto')
        setVisible(false)
    }

    return (
        <>
            {
                profile && (
                    <div className='animate__animated animate__fadeIn flex flex-row '>

                        <div className='my-4'>
                            <div className="avatar online mr-5">
                                <div className="w-14 rounded-full">
                                    <img src={`https://ui-avatars.com/api/?name=${profile.name}&size=128&rounded=true`} />
                                </div>
                            </div>

                        </div>


                        <div className=" container">
                            <h1 className="text-2xl text-purple-500 font-bold">
                                {
                                    profile.name
                                }
                            </h1>
                            <h2 className="text-xl text-purple-500">
                                {
                                    profile.email
                                }
                            </h2>
                            <h2 className="text-xl text-purple-400">
                                {
                                    profile.role
                                }
                            </h2>

                            <div className="py-5">
                                <a
                                    onClick={handleCloseSession}
                                    className="cursor-pointer flex">
                                    <span className='text-xl'>
                                        Cerrar sesión
                                    </span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-5 h-5 ml-2 my-1">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                </a>
                            </div>

                        </div>
                    </div>
                )
            }

        </>
    )
}
