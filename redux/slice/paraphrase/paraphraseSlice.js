import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import paraphraseService from "./paraphraseService";

const initialState = {
    paraphraseResults: null,
    isparaphraseError: false,
    isparaphraseSuccess: false,
    isparaphraseLoading: false,
    isparaphraseMessage: '',
}

export const paraphrase = createAsyncThunk('paraphrase/paraphrase', async (paraphraseData, thunkAPI) => {
    try {
        return await paraphraseService.paraphrase(paraphraseData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const paraphraseSlice = createSlice({
    name: 'paraphrase',
    initialState,
    reducers: {

    }, 
    extraReducers: (builder) => {
        builder
            .addCase(paraphrase.pending, (state) => {
                state.isparaphraseLoading = true
            })
            .addCase(paraphrase.fulfilled, (state, action) => {
                state.isparaphraseLoading = false
                state.isparaphraseSuccess = true
                state.paraphrase = action.payload
            })
            .addCase(paraphrase.rejected, (state, action) => {
                state.isparaphraseLoading = false
                state.isparaphraseError = true
                state.isparaphraseMessage = action.payload
                state.paraphrase = null 
            })
    }
})

export default paraphraseSlice.reducer