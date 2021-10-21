const CHANGE_IS_LOADING = "CHANGE-IS-LOADING"

type StateType = {
    isLoading:boolean
}

type ActionType =
    ReturnType<typeof loadingAC>

const initState = {
    isLoading:false
}

export const loadingReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case CHANGE_IS_LOADING: {
            return {
                ...state,
                isLoading:action.isLoading
            }
        }
        default: return state
    }
}



export const loadingAC = (isLoading:boolean) => {
    return{type:CHANGE_IS_LOADING, isLoading } as const
}