import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affair.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    const colorForPriority = () => {
        if(props.affair.priority === 'high'){
            return s.HighPriority
        }else if(props.affair.priority === 'middle'){
            return s.MiddlePriority
        }else if(props.affair.priority === 'low'){
            return s.lowPriority
        }
        return
    }

    return (
        <div className={s.content}>
            <div className={s.name}>{props.affair.name}</div>
            <div className={s.priority}>
                <div className={colorForPriority()}>
                    {props.affair.priority}
                </div>
            </div>
            <button className={s.deleteButton} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair


// user => click =>


// onClick => deleteCallback => props.deleteAffarCallback( arg )