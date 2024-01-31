import { formatHour } from "../../utils"


export const BubbleClient = ({ message }) => {
    return (
        <>
            <div className="chat chat-end ">
                <div className="chat-bubble bg-gradient-to-l from-slate-100 to-slate-50 text-black">
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
