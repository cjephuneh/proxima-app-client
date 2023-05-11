import axios from "axios"

export const makeRequest = async (method, apiRoute, payload) => {
    if(method === 'GET'){
        const res =  await axios.get(apiRoute)
        return res.data
    }
    if(method === 'POST'){
        const res =  await axios.post(apiRoute, payload)
        return res.data
    }
}