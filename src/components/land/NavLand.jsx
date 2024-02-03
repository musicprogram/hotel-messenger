import React from 'react'
import { useRecoilState } from 'recoil';
import { modalUserSign, numBack } from '../../states/userStates';
import { arrayRandom } from '../../utils';
import { objsImgs } from '../../data/dataImages';


export const NavLand = () => {
    const [visible, setVisible] = useRecoilState(modalUserSign);
    const [myNum, setNum] = useRecoilState(numBack); // Cambia 'inicial' por el valor inicial que desees

    const isForm = () => {
        setVisible(!visible)
        const image = arrayRandom(objsImgs)
        setNum(image.id)
    }

    return (
        <div className="w-full container mx-auto relative z-10 animate__animated  animate__bounceInLeft animate__faster">
            <div className="w-full flex items-center justify-between">
                <a className="flex items-center text-purple-300 no-underline hover:no-underline font-bold text-2xl lg:text-4xl p-2" href="#">
                    Hotel <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-400 "> Messenger</span>
                </a>
                <div className="flex w-1/2 justify-end content-center">
                    <a
                        className="inline-block cursor-pointer text-purple-200 no-underline hover:text-purple-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform  duration-300 ease-in-out"
                        onClick={isForm}
                    >
                        {
                            visible ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            )
                        }


                    </a>
                </div>
            </div>
        </div>
    )
}
