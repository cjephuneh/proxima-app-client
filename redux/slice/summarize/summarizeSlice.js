import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import summarizeService from "./summarizeService";

const initialState = {
    summarizeResults: null,
    issummarizeError: false,
    issummarizeSuccess: false,
    issummarizeLoading: false,
    issummarizeMessage: '',
}

export const summarize = createAsyncThunk('summarize/summarize', async (summarizeData, thunkAPI) => {
    try {
        return await summarizeService.summarize(summarizeData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const summarizeSlice = createSlice({
    name: 'summarize',
    initialState,
    reducers: {

    }, 
    extraReducers: (builder) => {
        builder
            .addCase(summarize.pending, (state) => {
                state.issummarizeLoading = true
            })
            .addCase(summarize.fulfilled, (state, action) => {
                state.issummarizeLoading = false
                state.issummarizeSuccess = true
                state.summarize = action.payload
            })
            .addCase(summarize.rejected, (state, action) => {
                state.issummarizeLoading = false
                state.issummarizeError = true
                state.issummarizeMessage = action.payload
                state.summarize = null 
            })
    }
})

export default summarizeSlice.reducer