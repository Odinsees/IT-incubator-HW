import React, {ChangeEvent, useState} from 'react'
import { v1 } from 'uuid';
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback:(newUser: UserType)=>void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (value:ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(value.currentTarget.value)
        setError('')// need to fix
    }
    const addUser = () => {
        if (name.trim() !==""){
            let newUser = {id:v1(), name:name}
            addUserCallback(newUser)
            alert(`Hello  ! ` + newUser.name)
            setName("")
        }else {
            setError("add current Name")
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer

