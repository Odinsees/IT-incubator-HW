import {UserType} from "../HW8";

const CHECK = 'check'
const SORT_USERS_NAME_UP = "up"
const SORT_USERS_NAME_DOWN = "down"


export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case SORT_USERS_NAME_UP: {
            for (let i = 0, endI = state.length - 1; i < endI; i++) {
                let wasSwap = false;
                for (let j = 0, endJ = endI - i; j < endJ; j++) {
                    if (state[j].name > state[j + 1].name) {
                        [state[j], state[j + 1]] = [state[j + 1], state[j]];
                        wasSwap = true;
                    }
                }
                if (!wasSwap) break;
            }
            return [...state];
        }
        case SORT_USERS_NAME_DOWN: {
            for (let i = 0, endI = state.length - 1; i < endI; i++) {
                let wasSwap = false;
                for (let j = 0, endJ = endI - i; j < endJ; j++) {
                    if (state[j].name < state[j + 1].name) {
                        [state[j], state[j + 1]] = [state[j + 1], state[j]];
                        wasSwap = true;
                    }
                }
                if (!wasSwap) break;
            }
            return [...state];
        }
        case CHECK: {
            // need to fix
            return state.filter(f => f.age >= action.age)
        }
        default:
            return state
    }
}

type ActionType =
    | ReturnType<typeof sortUpAC>
    | ReturnType<typeof sortDownAC>
    | ReturnType<typeof checkUserAgeAC>

export const sortUpAC = () => {
    return {
        type: SORT_USERS_NAME_UP
    } as const
}

export const sortDownAC = () => {
    return {
        type: SORT_USERS_NAME_DOWN
    } as const
}

export const checkUserAgeAC = (age: number) => {
    return {
        type: CHECK,
        age: age
    } as const
}

