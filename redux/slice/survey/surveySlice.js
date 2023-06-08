import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import surveyService from "./surveyService";

const initialState = {
    survey: null,
    response: null,

    // survey
    isSurveyError: false,
    isSurveySuccess: false,
    isSurveyLoading: false,
    isSurveyMessage: '',

    // response
    isResponseError: false,
    isResponseSuccess: false,
    isResponseLoading: false,
    isResponseMessage: ''
}

/*
    Create a survey
    Retrieve a particular survey response
 */
export const tenant_survey = createAsyncThunk('survey/survey', async (surveyData, thunkAPI) => {
    try {
        return await surveyService.survey(surveyData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get response chats for a particular survey
export const response = createAsyncThunk('survey/response', async (surveyData, thunkAPI) => {
    try {
        return await surveyService.response(surveyData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const surveySlice = createSlice({
    name: 'survey',
    initialState,
    reducers: {

    }, 
    extraReducers: (builder) => {
        builder
            // survey
            .addCase(tenant_survey.pending, (state) => {
                state.isSurveyLoading = true
            })
            .addCase(tenant_survey.fulfilled, (state, action) => {
                state.isSurveyLoading = false
                state.isSurveySuccess = true
                state.survey = action.payload
            })
            .addCase(tenant_survey.rejected, (state, action) => {
                state.isSurveyLoading = false
                state.isSurveyError = true
                state.isSurveyMessage = action.payload
                state.survey = null 
            })

            // response
            .addCase(response.pending, (state) => {
                state.isResponseLoading = true
            })
            .addCase(response.fulfilled, (state, action) => {
                state.isResponseLoading = false
                state.isResponseSuccess = true
                state.response = action.payload
            })
            .addCase(response.rejected, (state, action) => {
                state.isResponseLoading = false
                state.isResponseError = true
                state.isResponseMessage = action.payload
                state.response = null 
            })
    }
})

export default surveySlice.reducer