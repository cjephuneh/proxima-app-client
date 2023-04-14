import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import generationService from "./generationService";

const initialState = {
    generationResults: null,
    isGenerationError: false,
    isGenerationSuccess: false,
    isGenerationLoading: false,
    isGenerationMessage: '',
}

export const generation = createAsyncThunk('generation/generation', async (generationData, thunkAPI) => {
    try {
        return await generationService.generation(generationData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const generationSlice = createSlice({
    name: 'generation',
    initialState,
    reducers: {

    }, 
    extraReducers: (builder) => {
        builder
            .addCase(generation.pending, (state) => {
                state.isGenerationLoading = true
            })
            .addCase(generation.fulfilled, (state, action) => {
                state.isGenerationLoading = false
                state.isGenerationSuccess = true
                state.generation = action.payload
            })
            .addCase(generation.rejected, (state, action) => {
                state.isGenerationLoading = false
                state.isGenerationError = true
                state.isGenerationMessage = action.payload
                state.generation = null 
            })
    }
})

export default generationSlice.reducer