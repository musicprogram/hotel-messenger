import React from 'react'

export const BreadCrumbsTop = ({ handleTab, tab, num, d, title }) => {
    return (

        <>

            <li>
                <a onClick={() => handleTab(num)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill={`${tab === num ? "#7e22ce" : "none"}`} viewBox="0 0 24 24 "
                        className={`w-4 h-4 stroke-current`}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d}></path></svg>
                    {
                        title
                    }
                </a>
            </li>


        </>
    )
}
