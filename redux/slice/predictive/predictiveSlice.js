import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";   
import predictiveService from "./predictiveService";

const initialState = {
    // chats
    chatInteractions: null,
    chatTopics: null,
    chatEscalatedChats: null,

    // chats loading state
    isChatInteractionsLoading: false,
    isChatTopicsLoading: false,
    isChatEscalatedChatsLoading: false,

    // chats error state
    isChatInteractionsError: false,
    isChatTopicsError: false,
    isChatEscalatedChatsError: false,

    // chats error message state
    isChatInteractionsMessage: '',
    isChatTopicsMessage: '',
    isChatEscalatedChatsMessage: '',

    // chats success state
    isChatInteractionsSuccess: false,
    isChatTopicsSuccess: false,
    isChatEscalatedChatsSuccess: false,


    // client
    clientGenderDistribution: null,
    clientUniqueClients: null,

    // client loading state
    isClientGenderDistributionLoading: false,
    isClientUniqueClientsLoading: false,

    // client error state
    isClientGenderDistributionError: false,
    isClientUniqueClientsError: false,

    // client error message state
    isClientGenderDistributionMessage: '',
    isClientUniqueClientsMessage: '',

    // client success state
    isClientGenderDistributionSuccess: false,
    isClientUniqueClientsSuccess: false,


    // community
    communityGrowthRate: null,
    communityInvolvements: null,

    // community loading state
    isCommunityGrowthRateLoading: false,
    isCommunityInvolvementsLoading: false,

    // community error state
    isCommunityGrowthRateError: false,
    isCommunityInvolvementsError: false,

    // community error message state
    isCommunityGrowthRateMessage: '',
    isCommunityInvolvementsMessage: '',

    // community success state
    isCommunityGrowthRateSuccess: false,
    isCommunityInvolvementsSuccess: false,
}

// Get tenant predicted interactions
export const chatInteractions = createAsyncThunk('predictive/chatInteractions', async (predictiveData, thunkAPI) => {
    try {
        return await predictiveService.chatInteractions(predictiveData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// get tenant predicted topics
export const chatTopics = createAsyncThunk('predictive/chatTopics', async (predictiveData, thunkAPI) => {
    try {
        return await predictiveService.chatTopics(predictiveData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get tenant escalated chats
export const chatEscalatedChats = createAsyncThunk('predictive/chatEscalatedChats', async (predictiveData, thunkAPI) => {
    try {
        return await predictiveService.chatEscalatedChats(predictiveData)
        } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})   

// Get tenant predicted gender distribution interaction predictions
export const clientGenderDistribution = createAsyncThunk('predictive/clientGenderDistribution', async (predictiveData, thunkAPI) => {
    try {
        return await predictiveService.clientGenderDistribution(predictiveData)
        } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}) 

// Get tenant predicted unique client interaction predictions
export const clientUniqueClients = createAsyncThunk('predictive/clientUniqueClients', async (predictiveData, thunkAPI) => {
    try {
        return await predictiveService.clientUniqueClients(predictiveData)
        } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}) 

// Get community growth rate predictions
export const communityGrowthRate = createAsyncThunk('predictive/communityGrowthRate', async (predictiveData, thunkAPI) => {
    try {
        return await predictiveService.communityGrowthRate(predictiveData)
        } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get community involvements predictions
export const communityInvolvements = createAsyncThunk('predictive/communityInvolvements', async (predictiveData, thunkAPI) => {
    try {
        return await predictiveService.communityInvolvements(predictiveData)
        } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// create the predictive slice
const predictiveSlice = createSlice({
    name: 'predictive',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(chatInteractions.pending, (state) => {
                state.isChatInteractionsLoading = true
            })
            .addCase(chatInteractions.fulfilled, (state, action) => {
                state.isChatInteractionsLoading = false
                state.isChatInteractionsSuccess = true
                state.chatInteractions = action.payload
            })
            .addCase(chatInteractions.rejected, (state, action) => {
                state.isChatInteractionsLoading = false
                state.isChatInteractionsError = true
                state.isChatInteractionsMessage = action.payload
                state.chatInteractions = null 
            })

            .addCase(chatTopics.pending, (state) => {
                state.isChatTopicsLoading = true
            })
            .addCase(chatTopics.fulfilled, (state, action) => {
                state.isChatTopicsLoading = false
                state.isChatTopicsSuccess = true
                state.chatTopics = action.payload
            })
            .addCase(chatTopics.rejected, (state, action) => {
                state.isChatTopicsLoading = false
                state.isChatTopicsError = true
                state.isChatTopicsMessage = action.payload
                state.chatTopics = null 
            })

            .addCase(chatEscalatedChats.pending, (state) => {
                state.isChatEscalatedChatsLoading = true
            })
            .addCase(chatEscalatedChats.fulfilled, (state, action) => {
                state.isChatEscalatedChatsLoading = false
                state.isChatEscalatedChatsSuccess = true
                state.chatEscalatedChats = action.payload
            })
            .addCase(chatEscalatedChats.rejected, (state, action) => {
                state.isChatEscalatedChatsLoading = false
                state.isChatEscalatedChatsError = true
                state.isChatEscalatedChatsMessage = action.payload
                state.chatEscalatedChats = null 
            })

            .addCase(clientGenderDistribution.pending, (state) => {
                state.isClientGenderDistributionLoading = true
            })
            .addCase(clientGenderDistribution.fulfilled, (state, action) => {
                state.isClientGenderDistributionLoading = false
                state.isClientGenderDistributionSuccess = true
                state.clientGenderDistribution = action.payload
            })
            .addCase(clientGenderDistribution.rejected, (state, action) => {
                state.isClientGenderDistributionLoading = false
                state.isClientGenderDistributionError = true
                state.isClientGenderDistributionMessage = action.payload
                state.clientGenderDistribution = null 
            })

            .addCase(clientUniqueClients.pending, (state) => {
                state.isClientUniqueClientsLoading = true
            })
            .addCase(clientUniqueClients.fulfilled, (state, action) => {
                state.isClientUniqueClientsLoading = false
                state.isClientUniqueClientsSuccess = true
                state.clientUniqueClients = action.payload
            })
            .addCase(clientUniqueClients.rejected, (state, action) => {
                state.isClientUniqueClientsLoading = false
                state.isClientUniqueClientsError = true
                state.isClientUniqueClientsMessage = action.payload
                state.clientUniqueClients = null 
            })

            .addCase(communityGrowthRate.pending, (state) => {
                state.isCommunityGrowthRateLoading = true
            })
            .addCase(clientUniqueClients.fulfilled, (state, action) => {
                state.isCommunityGrowthRateLoading = false
                state.isCommunityGrowthRateSuccess = true
                state.communityGrowthRate = action.payload
            })
            .addCase(communityGrowthRate.rejected, (state, action) => {
                state.isCommunityGrowthRateLoading = false
                state.isCommunityGrowthRateError = true
                state.isCommunityGrowthRateMessage = action.payload
                state.communityGrowthRate = null 
            })

            .addCase(communityInvolvements.pending, (state) => {
                state.isCommunityInvolvementsLoading = true
            })
            .addCase(communityInvolvements.fulfilled, (state, action) => {
                state.isCommunityInvolvementsLoading = false
                state.isCommunityInvolvementsSuccess = true
                state.communityInvolvements = action.payload
            })
            .addCase(communityInvolvements.rejected, (state, action) => {
                state.isCommunityInvolvementsLoading = false
                state.isCommunityInvolvementsError = true
                state.isCommunityInvolvementsMessage = action.payload
                state.communityInvolvements = null 
            })
    }
})

export default predictiveSlice.reducer