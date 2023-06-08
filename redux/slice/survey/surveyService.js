import { ClientApiUrls } from "@/utils/ClientApiUrls";
import axios from "axios";

// create a surver and retrieve a particular survey response
const survey = async (surveyData) => {
    // const res = await axios.post('/api/survey/survey', surveyData)

    // return res.data
    try {
        const { data } = await axios.post(ClientApiUrls.survey, surveyData)

        return data.data
    } catch (error) {
        throw error
    }
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