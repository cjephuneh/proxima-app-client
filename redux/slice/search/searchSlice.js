import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import searchService from "./searchService";

const initialState = {
    searchWord: '',
    isSearchWindowVisible: false,

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
        setSearchValue: (state, action) => {
            state.searchWord = action.payload
        },
        setIsSearchWindowVisible: (state) => {
            state.isSearchWindowVisible = true
        }, 
        closeSearchWindow: (state) => {
            state.isSearchWindowVisible = false
        }
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

export const { setSearchValue, setIsSearchWindowVisible, closeSearchWindow } = searchSlice.actions

export default searchSlice.reducer