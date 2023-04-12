import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
  user: null,
  admin: null,
  anonymoususer: null,
  client: null,
  employee: null,
  changepassword: null,
  forgotpassword: null,
  activate_user: null,
  resendactivationlink: null,
  reset_password: null,

    // user
    isUserError: false,
    isUserSuccess: false,
    isUserLoading: false,
    isUserMessage: '',

    // admin
    isAdminError: false,
    isAdminSuccess: false,
    isAdminLoading: false,
    isAdminMessage: '',

    // anonymous user
    isAnonymousUserError: false,
    isAnonymousUserSuccess: false,
    isAnonymousUserLoading: false,
    isAnonymousUserMessage: '',

    // client
    isClientError: false,
    isClientSuccess: false,
    isClientLoading: false,
    isClientMessage: '',

    // employee
    isEmployeeError: false,
    isEmployeeSuccess: false,
    isEmployeeLoading: false,
    isEmployeeMessage: '',

    // change password
    isChangePasswordError: false,
    isChangePasswordSuccess: false,
    isChangePasswordLoading: false,
    isChangePasswordMessage: '',

    // forgot password
    isForgotPasswordError: false,
    isForgotPasswordSuccess: false,
    isForgotPasswordLoading: false,
    isForgotPasswordMessage: '',

    // activate user
    isActivateUserError: false,
    isActivateUserSuccess: false,
    isActivateUserLoading: false,
    isActivateUserMessage: '',

    // resend activation link
    isResendActivationLinkError: false,
    isResendActivationLinkSuccess: false,
    isResendActivationLinkLoading: false,
    isResendActivationLinkMessage: '',

    // reset password
    isResetPasswordError: false,
    isResetPasswordSuccess: false,
    isResetPasswordLoading: false,
    isResetPasswordMessage: '',
}

// allow all users to sign in
export const signin = createAsyncThunk('auth/signin', async (user, thunkAPI) => {
    try {
        return await authService.signin(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// register organization admin user
export const admin = createAsyncThunk('auth/admin', async (user, thunkAPI) => {
    try {
        return await authService.admin(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// register anonymous user 
export const anonymoususer = createAsyncThunk('auth/anonymoususer', async (user, thunkAPI) => {
    try {
        return await authService.anonymoususer(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Register users who will seek assistance from organizations
export const client = createAsyncThunk('auth/client', async (user, thunkAPI) => {
    try {
        return await authService.client(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Register organization employee
export const employee = createAsyncThunk('auth/employee', async (user, thunkAPI) => {
    try {
        return await authService.employee(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Enable any user to change password
export const changepassword = createAsyncThunk('auth/changepassword', async (user, thunkAPI) => {
    try {
        return await authService.changepassword(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Enable any user to change password
export const forgotpassword = createAsyncThunk('auth/forgotpassword', async (user, thunkAPI) => {
    try {
        return await authService.forgotpassword(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Activate a user after they have signed up
export const activate_user = createAsyncThunk('auth/activate_user', async (user, thunkAPI) => {
    try {
        return await authService.activate_user(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Resend invitation link to user incase they did not get one
export const resendactivationlink = createAsyncThunk('auth/resendactivationlink', async (user, thunkAPI) => {
    try {
        return await authService.resendactivationlink(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Resend invitation link to user incase they did not get one
export const reset_password = createAsyncThunk('auth/reset_password', async (user, thunkAPI) => {
    try {
        return await authService.reset_password(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // function to reset values to initial state
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.isMessage = ''
        }
    },
    // asynchronous fxns
    extraReducers: (builder) => {
        builder
            .addCase(signin.pending, (state) => {
                state.isUserLoading = true
            })
            .addCase(signin.fulfilled, (state, action) => {
                state.isUserLoading = false
                state.isUserSuccess = true
                state.user = action.payload
            })
            .addCase(signin.rejected, (state, action) => {
                state.isUserLoading = false
                state.isUserError = true
                state.isUserMessage = action.payload
                state.user = null 
            })

            .addCase(admin.pending, (state) => {
                state.isAdminLoading = true
            })
            .addCase(admin.fulfilled, (state, action) => {
                state.isAdminLoading = false
                state.isAdminSuccess = true
                state.admin = action.payload
            })
            .addCase(admin.rejected, (state, action) => {
                state.isAdminLoading = false
                state.isAdminError = true
                state.isAdminMessage = action.payload
                state.admin = null 
            })

            .addCase(anonymoususer.pending, (state) => {
                state.isAnonymousUserLoading = true
            })
            .addCase(anonymoususer.fulfilled, (state, action) => {
                state.isAnonymousUserLoading = false
                state.isAnonymousUserSuccess = true
                state.anonymoususer = action.payload
            })
            .addCase(anonymoususer.rejected, (state, action) => {
                state.isAnonymousUserLoading = false
                state.isAnonymousUserError = true
                state.isAnonymousUserMessage = action.payload
                state.anonymoususer = null 
            })

            .addCase(client.pending, (state) => {
                state.isClientLoading = true
            })
            .addCase(client.fulfilled, (state, action) => {
                state.isClientLoading = false
                state.isClientSuccess = true
                state.client = action.payload
            })
            .addCase(client.rejected, (state, action) => {
                state.isClientLoading = false
                state.isClientError = true
                state.isClientMessage = action.payload
                state.client = null 
            })

            .addCase(employee.pending, (state) => {
                state.isEmployeeLoading = true
            })
            .addCase(employee.fulfilled, (state, action) => {
                state.isEmployeeLoading = false
                state.isEmployeeSuccess = true
                state.employee = action.payload
            })
            .addCase(employee.rejected, (state, action) => {
                state.isEmployeeLoading = false
                state.isEmployeeError = true
                state.isEmployeeMessage = action.payload
                state.employee = null 
            })

            .addCase(changepassword.pending, (state) => {
                state.isChangePasswordLoading = true
            })
            .addCase(changepassword.fulfilled, (state, action) => {
                state.isChangePasswordLoading = false
                state.isChangePasswordSuccess = true
                state.changepassword = action.payload
            })
            .addCase(changepassword.rejected, (state, action) => {
                state.isChangePasswordLoading = false
                state.isChangePasswordError = true
                state.isChangePasswordMessage = action.payload
                state.changepassword = null 
            })

            .addCase(forgotpassword.pending, (state) => {
                state.isForgotPasswordLoading = true
            })
            .addCase(forgotpassword.fulfilled, (state, action) => {
                state.isForgotPasswordLoading = false
                state.isForgotPasswordSuccess = true
                state.forgotpassword = action.payload
            })
            .addCase(forgotpassword.rejected, (state, action) => {
                state.isForgotPasswordLoading = false
                state.isForgotPasswordError = true
                state.isForgotPasswordMessage = action.payload
                state.forgotpassword = null 
            })

            .addCase(activate_user.pending, (state) => {
                state.isActivateUserLoading = true
            })
            .addCase(activate_user.fulfilled, (state, action) => {
                state.isActivateUserLoading = false
                state.isActivateUserSuccess = true
                state.activate_user = action.payload
            })
            .addCase(activate_user.rejected, (state, action) => {
                state.isActivateUserLoading = false
                state.isActivateUserError = true
                state.isActivateUserMessage = action.payload
                state.activate_user = null 
            })

            .addCase(resendactivationlink.pending, (state) => {
                state.isResendActivationLinkLoading = true
            })
            .addCase(resendactivationlink.fulfilled, (state, action) => {
                state.isResendActivationLinkLoading = false
                state.isResendActivationLinkSuccess = true
                state.resendactivationlink = action.payload
            })
            .addCase(resendactivationlink.rejected, (state, action) => {
                state.isResendActivationLinkLoading = false
                state.isResendActivationLinkError = true
                state.isResendActivationLinkMessage = action.payload
                state.resendactivationlink = null 
            })

            .addCase(reset_password.pending, (state) => {
                state.isResendActivationLinkLoading = true
            })
            .addCase(reset_password.fulfilled, (state, action) => {
                state.isResendActivationLinkLoading = false
                state.isResendActivationLinkSuccess = true
                state.resendactivationlink = action.payload
            })
            .addCase(reset_password.rejected, (state, action) => {
                state.isResendActivationLinkLoading = false
                state.isResendActivationLinkError = true
                state.isResendActivationLinkMessage = action.payload
                state.resendactivationlink = null 
            })
    }
})

export const { reset } = authSlice.actions

export default authSlice.reducer