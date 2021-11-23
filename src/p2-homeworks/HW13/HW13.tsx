import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {ChangeEvent, useState} from "react";
import {requestAPI} from "./RequestsAPI";

export const HW13 = () => {
    return (
        <>
            HW13
            <Request/>
        </>
    )
}

type MessageType = {
    message: string | null
}

export const Request = () => {

    const [checked, SetChecked] = useState(false)
    const [request, SetRequest] = useState<MessageType>({message: null})

    const changeCheckedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        SetChecked(e.currentTarget.checked)
    }

    const sendRequestHandler = () => {
        requestAPI.postRequest(checked)
            .then(res => {
                console.log(res.data)
                SetRequest({...request, message: res.data.errorText})
            })
            .catch(error => {
                console.log(error.response ? error.response.data.errorText : error.message)
                SetRequest({...request, message: error.response.data.errorText})
            })

    }

    return (
        <div>
            <SuperButton onClick={sendRequestHandler}>send request</SuperButton>
            <SuperCheckbox checked={checked} onChange={changeCheckedHandler}/><br/>
            {request && request.message}<br/>
        </div>
    )
}