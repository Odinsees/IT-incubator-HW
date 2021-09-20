import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from "./Routes";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.wrap}>
                <NavLink to={PATH.PRE_JUNIOR}> PreJunior </NavLink>
                <NavLink to={PATH.JUNIOR}> Junior </NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}> JuniorPlus </NavLink>
                <div className={s.menu}>| Menu</div>
        </div>
    )
}

export default Header
