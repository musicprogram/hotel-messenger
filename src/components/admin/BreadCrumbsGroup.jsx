import React from 'react'
import { BreadCrumbsTop } from './BreadCrumbsTop'

export const BreadCrumbsGroup = ({ handleTab, tab }) => {
    return (

        <>


            <div className="text-sm breadcrumbs text-purple-500" >
                <ul>
                    <BreadCrumbsTop
                        handleTab={handleTab}
                        tab={tab}
                        num={5}
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        title="Mi perfil"

                    />

                </ul>
            </div >


            <div className="text-sm breadcrumbs text-purple-500" >
                <ul>
                    <BreadCrumbsTop
                        handleTab={handleTab}
                        tab={tab}
                        num={1}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        title="Cuartos disponibles"

                    />
                    <BreadCrumbsTop
                        handleTab={handleTab}
                        tab={tab}
                        num={2}
                        d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        title="Agregar cuarto"

                    />



                </ul>
            </div >

            <div className="text-sm breadcrumbs text-purple-500">
                <ul>
                    <BreadCrumbsTop
                        handleTab={handleTab}
                        tab={tab}
                        num={3}
                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                        title="Usuarios"

                    />

                    <BreadCrumbsTop
                        handleTab={handleTab}
                        tab={tab}
                        num={4}
                        d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        title="Agregar usuario"

                    />


                </ul>
            </div>

        </>
    )
}
