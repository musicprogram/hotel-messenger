import React, { useEffect, useState } from 'react'
import { FooterLand } from './FooterLand'
import { CarouselImages } from './CarouselImages'
import { NavLand } from './NavLand'
import { TextLand } from './TextLand'
import { SocialButtons } from './SocialButtons'
import { FormUserSign } from './FormUserSign'
import { useRecoilState } from 'recoil'
import { modalUserSign, numBack } from '../../states/userStates'
import { arrayRandom } from '../../utils'
import { objsImgs } from '../../data/dataImages'




export const MainLandBoard = () => {
    const [myNum, setNum] = useRecoilState(numBack); // Cambia 'inicial' por el valor inicial que desees
    const [dynamicImg, setDynamicImg] = useState('');
    const [imageObject, setImageObject] = useState(objsImgs[0]);
    const [visible, setVisible] = useRecoilState(modalUserSign);


    useEffect(() => {
        //setNum(arrayRandom(images))
        const image = arrayRandom(objsImgs)
        setNum(image.id)
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Cambia la lógica de actualización de la variable según tus necesidades
            setDynamicImg((prevVariable) => {
                // Aquí puedes realizar la lógica de actualización
                // En este ejemplo, simplemente concatenamos un número creciente
                return prevVariable + 1;
            });
            const image = arrayRandom(objsImgs)
            const foundObject = objsImgs.find(obj => obj.id === image.id);
            setImageObject(foundObject)
            setDynamicImg(foundObject.id)
        }, 3000); // 3000 milisegundos = 3 segundos

        // Devolver una función de limpieza para detener el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
    }, []); // El segundo argumento es un array vacío para que useEffect solo se ejecute una vez al montar el componente





    return (
        <>


            <div className="container pt-10 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center relative z-10">
                {
                    visible ? (

                        <>
                            <FormUserSign />
                            <FooterLand />
                        </>
                    ) : (
                        <>
                            <TextLand />

                            <CarouselImages imageObject={imageObject} />

                            <SocialButtons />


                        </>
                    )
                }



            </div>
        </>
    )
}
