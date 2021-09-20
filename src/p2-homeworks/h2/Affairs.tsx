import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter:FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    } // need to fix
    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }

    return (
        <div className={s.content}>
            <div className={s.affairs}>
                {mappedAffairs}
            </div>
            <div className={s.filterButtons}>
                <button className={props.filter === 'all'? s.active: ''} onClick={setAll}>All</button>
                <button className={props.filter === 'high'? s.active: ''} onClick={setHigh}>High</button>
                <button className={props.filter === 'middle'? s.active: ''} onClick={setMiddle}>Middle</button>
                <button className={props.filter === 'low'? s.active: ''} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
