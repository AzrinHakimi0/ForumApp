import React from 'react'

import { ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine'

const HomePage = () => {
    return (
        <ChatEngineWrapper>
            <ChatSocket 
                projectID='a14a8024-5183-461a-896d-cec72bb6fe3d'
                chatID='222499'
                chatAccessKey='priojectmad'
                senderUsername='Ahmad'
            />

            <ChatFeed activeChat='123' /> 
        </ChatEngineWrapper>
    )
}

export default HomePage