import React from 'react'
import Message from './Message'

const messageData = {
    avatar: 'https://www.meme-arsenal.com/memes/6a3fa10dd6d17518c5a55a98f819015b.jpg',
    name: 'Агент ФСБ',
    message: 'Эй, выключай камеру когда развлекаешься, я не хочу на это смотреть!',
    time: '22:00',
}

function HW1() {
    return (
        <div>

            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
