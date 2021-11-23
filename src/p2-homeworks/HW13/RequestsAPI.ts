import axios, { AxiosResponse } from 'axios'


const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
})


export const requestAPI = {
    postRequest(success:boolean){
        return instance.post(`auth/test`, {success})
    }
}