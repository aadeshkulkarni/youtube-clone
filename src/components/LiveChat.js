import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/slice/chatSlice'

const LiveChat = () => {
    const dispatch = useDispatch()
    const chatMessages = useSelector(store=>store.chat.messages)
    useEffect(() => {
        const i = setInterval(() => {
            // API Polling
            console.log("API Polling")
            dispatch(addMessage({name: "Aadesh Kulkarni", message: "Hello World"}))
        }, 2000)

        return () => clearInterval(i)
    }, [])
    return (
        <div className="p-2 ml-2 bg-slate-100 w-full h-[500px] border border-gray-300 rounded-lg overflow-y-scroll flex flex-col-reverse">
            {chatMessages && chatMessages.map((chat,index)=><ChatMessage key={index} name={chat.name} message={chat.message}/>)}
        </div>
    )
}

export default LiveChat