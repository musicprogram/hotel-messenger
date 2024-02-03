import { useRecoilState } from 'recoil'
import { BubbleAdmin } from './BubbleAdmin'
import { BubbleClient } from './BubbleClient'
import { ChatFooter } from './ChatFooter'
import { myListOfChats } from '../../states/chatMainStates'
import { useEffect } from 'react'
import { urlBackLocal } from '../../conts'

export const ChatDashboard = () => {

    const [chats, setChats] = useRecoilState(myListOfChats)


    useEffect(() => {
        const userGet = `?user=${1}`
        const roomId = `&chat_room_id=${2}`

        const urlBackWithParams = urlBackLocal + "/messages" + userGet + roomId

        fetch(urlBackWithParams)
            .then(res => res.json())
            .then((data) => {
                setChats(data)
            })
    }, [])

    return (
        <>

            <div className="flex flex-col overflow-y-auto">
                <div className="p-2 mx-auto">

                    <div className="relative">
                        <ChatFooter />
                        <div className='p-2'>

                            {
                                chats.map((message, i) => {
                                    return (
                                        <>
                                            <div key={i}>
                                                {
                                                    message.emisor === 1 && <BubbleAdmin message={message} /> ||
                                                    message.emisor === 2 && <BubbleClient message={message} />
                                                }

                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
