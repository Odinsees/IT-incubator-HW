import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from "./Routes";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.wrap}>
                <NavLink className={s.a} activeClassName={s.Active} to={PATH.PRE_JUNIOR}><span>PreJunior</span></NavLink>
                <NavLink className={s.a} activeClassName={s.Active} to={PATH.JUNIOR}><span>Junior</span></NavLink>
                <NavLink className={s.a} activeClassName={s.Active} to={PATH.JUNIOR_PLUS}><span>Junior Plus</span></NavLink>
                <div className={s.menu}>| Menu</div>
        </div>
    )
}

export default Header
