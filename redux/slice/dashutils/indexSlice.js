import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showDetails: false
}

export const dashUtils = createSlice({
    name: 'dashUtils',
    initialState,
    reducers: {
        setShowDetails: (state) => {
            state.showDetails = !state.showDetails
        }
    },
})

export const { setShowDetails } = dashUtils.actions

export default dashUtils.reducer