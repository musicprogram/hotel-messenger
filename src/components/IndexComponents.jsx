import React, { useEffect } from 'react'

import { RecoilRoot, useRecoilState } from 'recoil'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLandBoard } from './land/MainLandBoard';
import { ChatMainDashboard } from './chatUX/ChatMainDashboard';
import { AdminDashboard } from './admin/AdminDashboard';
import { localStorageObj, localStorageUser, numBack } from '../states/userStates';
import { objsImgs } from '../data/dataImages';
import { arrayRandom, decryptData } from '../utils';
import { secretKeyLocalHost } from '../conts';
import { NavLand } from './land/NavLand';

export const IndexComponents = () => {
    const [myNum, setNum] = useRecoilState(numBack); // Cambia 'inicial' por el valor inicial que desees


    const [userStorge, setUserStorge] = useRecoilState(localStorageUser);
    const [userObj, setUserObj] = useRecoilState(localStorageObj);

    useEffect(() => {
        const img = arrayRandom(objsImgs)
        setNum(img.id)
        if (userStorge) {
            const crypt = decryptData(userStorge, secretKeyLocalHost)
            const userCrypt = JSON.parse(crypt)
            setUserObj(userCrypt)
        } else {
            setUserObj(null)
        }

    }, [])

    return (
        <>
            <div className={`relative animate__animated animate__fadeIn bg-cover min-h-screen`} style={{ backgroundImage: `url('/imagesLand/${myNum}.jpg')` }} >
                <div className="absolute inset-0 bg-gradient-to-l from-purple-950 to-blue-950 opacity-60"></div>
                <NavLand />
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={<MainLandBoard />} />
                        <Route
                            path="/messages"
                            element={<ChatMainDashboard />} />
                        <Route
                            path="/admin"
                            element={<AdminDashboard />} />
                    </Routes>
                </BrowserRouter>
            </div>



        </>
    )
}
