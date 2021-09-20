import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import { v1 } from 'uuid';

// types
export type UserType = {
    id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (newUser: UserType) => { // need to fix any
        setUsers([newUser,...users]) // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users}
                               addUserCallback={addUserCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
