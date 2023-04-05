import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  isMessage: ''
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
                state.isLoading = true
            })
            .addCase(signin.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(signin.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isMessage = action.payload
                state.user = null 
            })

            .addCase(admin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(admin.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(admin.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isMessage = action.payload
                state.user = null 
            })

            .addCase(anonymoususer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(anonymoususer.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(anonymoususer.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isMessage = action.payload
                state.user = null 
            })

            .addCase(client.pending, (state) => {
                state.isLoading = true
            })
            .addCase(client.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(client.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isMessage = action.payload
                state.user = null 
            })

            .addCase(employee.pending, (state) => {
                state.isLoading = true
            })
            .addCase(employee.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(employee.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isMessage = action.payload
                state.user = null 
            })

            .addCase(changepassword.pending, (state) => {
                state.isLoading = true
            })
            .addCase(changepassword.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(changepassword.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isMessage = action.payload
                state.user = null 
            })

            .addCase(forgotpassword.pending, (state) => {
                state.isLoading = true
            })
            .addCase(forgotpassword.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(forgotpassword.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isMessage = action.payload
                state.user = null 
            })

            .addCase(activate_user.pending, (state) => {
                state.isLoading = true
            })
            .addCase(activate_user.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(activate_user.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isMessage = action.payload
                state.user = null 
            })

            .addCase(resendactivationlink.pending, (state) => {
                state.isLoading = true
            })
            .addCase(resendactivationlink.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(resendactivationlink.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isMessage = action.payload
                state.user = null 
            })

            .addCase(reset_password.pending, (state) => {
                state.isLoading = true
            })
            .addCase(reset_password.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(reset_password.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isMessage = action.payload
                state.user = null 
            })
    }
})

export const { reset } = authSlice.actions

export default authSlice.reducer