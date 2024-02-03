import React from 'react'

export const TextLand = () => {
    return (
        <div className="flex flex-col w-full justify-center lg:items-start overflow-y-hidden animate__animated animate__zoomIn ">
            <h1 className="my-4 text-3xl md:text-5xl text-purple-200 font-bold leading-tight text-center md:text-left p-6">
                Aplicación web que permite a los hoteles comunicarse en
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-400">
                    {' '} tiempo real {' '}
                </span>
                con sus visitantes a través de mensajes.
            </h1>
        </div>
    )
}
