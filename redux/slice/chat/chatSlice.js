import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import chatService from './chatService'

const initialState = {
    chat: null,
    message: null,

    // chat
    isChatError: false,
    isChatSuccess: false,
    isChatLoading: false,
    isChatMessage: '',

    // message
    isMessageError: false,
    isMessageSuccess: false,
    isMessageLoading: false,
    isMessageMessage: ''
}

/**
 * 
    Create new chat
    Update new chat
    Retrieve a single chat
    Delete a chat
    Retrieve tenant chats
    Retrieve client chats

 */
export const chat = createAsyncThunk('chat/chat', async (chatData, thunkAPI) => {
    try {
        return await chatService.signin(chatData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


/* 
    Add message to a chat
    Fetch all messages belongin to a particular chat
    Delete a message
*/
export const message = createAsyncThunk('chat/message', async (chatData, thunkAPI) => {
    try {
        return await chatService.message(chatData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        // function to reset values to initial state
        reset: (state) => {
            // state.isLoading = false
            // state.isSuccess = false
            // state.isError = false
            // state.isMessage = ''

            // NOTE: REWORK THESE!!!!!!!!!!!!!!!!
        }
    },
    // asynchronous fxns
    extraReducers: (builder) => {
        builder
            // chat
            .addCase(chat.pending, (state) => {
                state.isChatLoading = true
            })
            .addCase(chat.fulfilled, (state, action) => {
                state.isChatLoading = false
                state.isChatSuccess = true
                state.chat = action.payload
            })
            .addCase(chat.rejected, (state, action) => {
                state.isChatLoading = false
                state.isChatError = true
                state.isChatMessage = action.payload
                state.chat = null 
            })

            // message
            .addCase(message.pending, (state) => {
                state.isMessageLoading = true
            })
            .addCase(message.fulfilled, (state, action) => {
                state.isMessageLoading = false
                state.isMessageSuccess = true
                state.message = action.payload
            })
            .addCase(message.rejected, (state, action) => {
                state.isMessageLoading = false
                state.isMessageError = true
                state.isMessageMessage = action.payload
                state.message = null 
            })
    }
})

export const { reset } = chatSlice.actions

export default chatSlice.reducer