import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import chatService from './chatService'

const initialState = {
    chat: null,
    message: null,
    createtenantmessage: null,

    // chat
    isChatError: false,
    isChatSuccess: false,
    isChatLoading: false,
    isChatMessage: '',

    // message
    isMessageError: false,
    isMessageSuccess: false,
    isMessageLoading: false,
    isMessageMessage: '',

    // create tenant message
    isCreateTenantMessageLoading: false,
    isCreateTenantMessageSuccess: false,
    isCreateTenantMessageError: false,
    isCreateTenantMessageMessage: '',
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
export const tenant_chat = createAsyncThunk('chat/chat', async (chatData, thunkAPI) => {
    try {
        return await chatService.chat(chatData)
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
export const tenant_message = createAsyncThunk('chat/message', async (chatData, thunkAPI) => {
    try {
        return await chatService.message(chatData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const create_tenant_message = createAsyncThunk('chat/create_message', async (chatData, thunkAPI) => {
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
        resetChatState: (state) => {
            // state.isChatLoading = false
            state.isChatSuccess = false
            state.isChatError = false
            state.isChatMessage = ''

        },
        resetMessageState: (state) => {
            // state.isChatLoading = false
            state.isMessageSuccess = false
            state.isMessageError = false
            state.isMessageMessage = ''

        }
    },
    // asynchronous fxns
    extraReducers: (builder) => {
        builder
            // chat
            .addCase(tenant_chat.pending, (state) => {
                state.isChatLoading = true
            })
            .addCase(tenant_chat.fulfilled, (state, action) => {
                state.isChatLoading = false
                state.isChatSuccess = true
                state.chat = action.payload
            })
            .addCase(tenant_chat.rejected, (state, action) => {
                state.isChatLoading = false
                state.isChatError = true
                state.isChatMessage = action.payload
                state.chat = null 
            })

            // message
            .addCase(tenant_message.pending, (state) => {
                state.isMessageLoading = true
            })
            .addCase(tenant_message.fulfilled, (state, action) => {
                state.isMessageLoading = false
                state.isMessageSuccess = true
                state.message = action.payload
            })
            .addCase(tenant_message.rejected, (state, action) => {
                state.isMessageLoading = false
                state.isMessageError = true
                state.isMessageMessage = action.payload
                state.message = null 
            })

            // create tenant message
            .addCase(create_tenant_message.pending, (state) => {
                state.isCreateTenantMessageLoading = true
            })
            .addCase(create_tenant_message.fulfilled, (state, action) => {
                state.isCreateTenantMessageLoading = false
                state.isCreateTenantMessageSuccess = true
                state.createtenantmessage = action.payload
            })
            .addCase(create_tenant_message.rejected, (state, action) => {
                state.isCreateTenantMessageLoading = false
                state.isCreateTenantMessageError = true
                state.isCreateTenantMessageMessage = action.payload
                state.createtenantmessage = null 
            })
    }
})

export const { resetChatState, resetMessageState } = chatSlice.actions

export default chatSlice.reducer