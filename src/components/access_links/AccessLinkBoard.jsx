import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export const AccessLinkBoard = () => {
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const user = searchParams.get('user');
        console.log(user)
    }, [])

    return (
        <>
            <h1>
                AccessLinkBoard
            </h1>
        </>
    )
}
