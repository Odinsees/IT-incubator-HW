import React from 'react'
import s from "./Message.module.css"

type MessageType = {
    avatar: any
    name: string
    message: string
    time: string
}


const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.messages}>
            <div className={s.ava}>
                <img src={props.avatar}/>
            </div>
            <div className={s.angle}/>
            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
)
}

export default Message;
