import {ThemeType} from "../HW12";

type initStateType = {
    theme: ThemeType
}

const initState: initStateType = {
    theme: 'dark'
};

export const themeReducer = (state: initStateType = initState, action: ActionsType): initStateType => { // fix any
    switch (action.type) {
        case "SWITCH_THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};


export const changeThemeC = (theme: ThemeType) => ({type: "SWITCH_THEME", theme});


type ActionsType =
    | ReturnType<typeof changeThemeC>