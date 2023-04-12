import axios from "axios";

// create a surver and retrieve a particular survey response
const survey = async (surveyData) => {
    const res = await axios.post('/api/survey/survey', surveyData)

    return res.data
}

// Get response chats for a particular survey
const response = async (surveyData) => {
    const res = await axios.post('/api/survey/response', surveyData)

    return res.data
}

const surveyService = {
    survey,
    response
}

export default surveyService;