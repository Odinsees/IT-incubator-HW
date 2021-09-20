import React from 'react'
import { NavLink } from 'react-router-dom';
import {PATH} from "./Routes";

function Header() {
    return (
        <div>
            <nav>
                <div>
                    <NavLink to={PATH.PRE_JUNIOR} > PreJunior </NavLink>
                </div>
                <div>
                    <NavLink to={PATH.JUNIOR} > Junior </NavLink>
                </div>
                <div>
                    <NavLink to={PATH.JUNIOR_PLUS} > JuniorPlus </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header
