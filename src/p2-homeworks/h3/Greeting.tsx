import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (value: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = `${s.error} ${s.inputStandard}`  // need to fix with (?:)
    const buttonClass = error ? s.addButtonDisabled : s.addButton

    return (
        <div className={s.content}>
            <div className={s.title}>Add User name</div>
            <div className={s.inputForm}>
                <input value={name} onChange={setNameCallback} className={error ? inputClass : s.inputStandard}/>
                <button className={buttonClass} disabled={!!error} onClick={addUser}>add</button>
                <span className={s.counter}>Total Users: <span>{totalUsers}</span></span>
            </div>
            <div className={s.errorMessage}>{error}</div>
        </div>
    )
}

export default Greeting
