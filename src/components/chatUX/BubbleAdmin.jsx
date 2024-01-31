import React from 'react'
import { formatHour } from '../../utils'


export const BubbleAdmin = ({ message }) => {


    return (
        <>
            <div className="chat chat-start">
                <div className="chat-image">
                    <div className="avatar">
                        <div className="w-10 rounded-full ring ring-yellow-400 ring-offset-base-100 ring-offset-2">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
                <div className="chat-header">
                    Obi-Wan Kenobi
                </div>
                <div className="chat-bubble text-white">
                    {
                        message.content
                    }
                </div>
                <div className="chat-footer opacity-60">
                    <time className="text-xs  ml-1 text-white">
                        {
                            message.hourCreated
                        }
                    </time>
                </div>
            </div>
        </>
    )
}
