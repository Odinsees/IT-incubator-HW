import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

export type ThemeType = 'dark' | 'red' | 'some'

const themes:ThemeType[] = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector((state:AppStoreType)=>state.colorTheme.theme); // useSelector
    const dispatch = useDispatch()

    const onChangeCallback = (newValue:ThemeType) =>{
        dispatch(changeThemeC(newValue))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperRadio
                value={theme}
                options={themes}
                onChangeOption={onChangeCallback}/>
            <hr/>
        </div>
    );
}

export default HW12;
