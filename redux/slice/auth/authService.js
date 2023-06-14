import { ClientApiUrls } from '@/utils/ClientApiUrls'
import axios from 'axios'

// sign in a user
const signin = async(userData) => {
    // const res = await axios.post('/api/auth/signin', userData)

    // return res.data

    try {
        const { data } = await axios.post(ClientApiUrls.signin, userData)

        if(data.token){
            if(data.user_type === 'admin' || data.user_type === 'employee'){
                localStorage.setItem('proxima_admin_details', JSON.stringify(data))

                return data
            } else {
                return { error: 'This user does not belong to any organization. Use the mobile application if you are a customer.' }
            }
        } else {
            if(data.message.error[0]){
                return { error: data.message.error[0]}
            }
            // console.log(data.message.error[0])
            // return { error: data }
        }
    } catch (error) {
        throw error
    }
}

// register organization admin user
const admin = async(adminData) => {
    try {
        const { data } = await axios.post(ClientApiUrls.admin, adminData)

        if(data.token){
            localStorage.setItem('proxima_admin_details', JSON.stringify(data))

            return data
        } else {
            if(data.message.username && data.message.email){
                return { error: 'username and email already registered' }
            }

            if(data.message.username && !data.message.email){
                return { error: 'username already registered' }
            }

            if(!data.message.username && data.message.email){
                return { error: 'email already registered' }
            }
            // return { error: data }
        }
    } catch (error) {
        throw error
    }
}


// Register anonymous user
const anonymoususer = async(userData) => {
    const res = await axios.post('/api/auth/anonymoususer', userData)

    return res.data
}

// Register users who will seek assistance from organizations
const client = async(userData) => {
    const res = await axios.post('/api/auth/client', userData)

    return res.data
}

// Register users who will seek assistance from organizations
const employee = async(userData) => {
    const res = await axios.post('/api/auth/employee', userData)

    return res.data
}

// Enable any user to change password
const changepassword = async(userData) => {
    const res = await axios.post('/api/auth/changepassword', userData)

    return res.data
}

// Enable user to say they forgot their password
const forgotpassword = async(userData) => {
    const res = await axios.post('/api/auth/forgotpassword', userData)

    return res.data
}

// Activate a user after they have signed up
const activate_user = async(userData) => {
    const res = await axios.post('/api/auth/activate_user', userData)

    return res.data
}

// Resend invitation link to user incase they did not get one
const resendactivationlink = async(userData) => {
    const res = await axios.post('/api/auth/resendactivationlink', userData)

    return res.data
}

// Enable a useer to reset their password
const reset_password = async(userData) => {
    const res = await axios.post('/api/auth/reset_password', userData)

    return res.data
}

const authService = {
    signin,
    admin,
    anonymoususer,
    client,
    employee,
    changepassword,
    forgotpassword,
    activate_user,
    resendactivationlink,
    reset_password
}

export default authService