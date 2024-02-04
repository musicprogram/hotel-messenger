import React, { useState } from 'react'
import { FormInputsSign } from './FormInputsSign'
import { userSignInFetch } from '../../fetch/userFetch';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { useRecoilState } from 'recoil';
import { localStorageObj, localStorageUser } from '../../states/userStates';


export const FormUserSign = ({ handleClose }) => {
    const navigate = useNavigate();


    const [userStorge, setUserStorge] = useRecoilState(localStorageUser);
    const [userObj, setUserObj] = useRecoilState(localStorageObj);



    const [formData, setFormData] = useState({
        email: '',
        password: '',
        // Agrega más campos según tus necesidades
    });


    // users/sign_in


    const handleSubmit = (e) => {
        e.preventDefault();

        userSignInFetch(formData, navigate, setUserObj)

    }

    return (

        <div className="flex flex-col w-full justify-center lg:items-start overflow-y-hidden p-3">


            <h2 className="py-3 text-purple-200 leading-tight  md:text-left text-2xl font-bold text-center animate__animated animate__fadeIn">
                Bienvenido a Hotel Messenger, tu puente instantáneo con todo lo que necesitas.
                Disfruta de una estadía personalizada con comunicación instantánea.
                <span className="bg-clip-text  font-light  text-transparent bg-gradient-to-r from-purple-300 to-purple-400">
                    {' '} ¡Estamos aquí para hacer tu experiencia inolvidable! {' '}
                </span>

            </h2>

            <form method="dialog " onSubmit={handleSubmit}>
                {/* if there is a button in form, it will close the modal */}
                <div className="mt-6 animate__animated animate__backInUp">
                    <FormInputsSign
                        formData={formData}
                        setFormData={setFormData}
                    />
                    <div className="py-4 flex justify-between">
                        <button
                            onClick={handleSubmit}
                            className="text-purple-300 font-bold flex">
                            <span className="text-2xl">
                                Ingresar
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 my-2 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </button>


                    </div>
                </div>
            </form >

        </div >

    )
}
