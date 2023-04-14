import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import searchService from "./searchService";

const initialState = {
    searchResults: null,
    isSearchError: false,
    isSearchSuccess: false,
    isSearchLoading: false,
    isSearchMessage: '',
}

export const search = createAsyncThunk('search/search', async (searchData, thunkAPI) => {
    try {
        return await searchService.search(searchData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {

    }, 
    extraReducers: (builder) => {
        builder
            .addCase(search.pending, (state) => {
                state.isSearchLoading = true
            })
            .addCase(search.fulfilled, (state, action) => {
                state.isSearchLoading = false
                state.isSearchSuccess = true
                state.search = action.payload
            })
            .addCase(search.rejected, (state, action) => {
                state.isSearchLoading = false
                state.isSearchError = true
                state.isSearchMessage = action.payload
                state.search = null 
            })
    }
})

export default searchSlice.reducer