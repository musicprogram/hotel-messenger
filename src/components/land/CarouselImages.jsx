import React from 'react'

export const CarouselImages = ({ imageObject }) => {
    return (
        <div className="relative mx-auto max-w-xl p-2 animate__animated animate__fadeIn">

            { /* Imagen */}
            <img src={`imagesLand/${imageObject.id}.jpg`} alt="Descripci\xF3n de la imagen" className="w-full h-auto rounded-lg" />

            { /* Contenedor de Texto y Botón */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center ">
                    <h1
                        className="drop-shadow-lg animate__animated animate__slideInUp font-bold text-[44px] mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-500">
                        {
                            imageObject.title
                        }
                    </h1>

                </div>
            </div>

        </div>
    )
}
