import axios from 'axios'

// sign in a user
const signin = async(userData) => {
    const res = await axios.post('/api/auth/signin', userData)

    return res.data
}

// register organization admin user
const admin = async(userData) => {
    const res = await axios.post('/api/auth/admin', userData)

    return res.data
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