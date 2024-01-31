import React from 'react'
import { ChatTextArea } from './ChatTextArea'

export const ChatFooter = () => {
    return (
        <>
            <div
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                className="fixed bottom-0 left-0 right-0 p-6 z-40">
                <div className="flex items-center">
                    <ChatTextArea />

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#facc15"
                        className="w-16 h-16 cursor-pointer">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                </div>

            </div>
        </>
    )
}
