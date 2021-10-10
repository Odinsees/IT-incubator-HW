import {UserType} from "../HW8";

const SORT = 'sort'
const CHECK = 'check'
const SORT_USERS_NAME_UP = "up"
const SORT_USERS_NAME_DOWN = "down"


export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            return state
        }
        case 'check': {
            // need to fix
            return state
        }
        default: return state
    }
}

type ActionType =
    | ReturnType<typeof sortUpAC>
    | ReturnType<typeof sortDownAC>
    | ReturnType<typeof checkUserAgeAC>

export const sortUpAC = () =>{
    return{
        type:SORT,
        payload:SORT_USERS_NAME_UP
    }as const
}

export const sortDownAC = () =>{
    return{
        type:SORT,
        payload:SORT_USERS_NAME_DOWN
    }as const
}

export const checkUserAgeAC = (age:number) =>{
    return{
        type:CHECK,
        payload:age
    }as const
}