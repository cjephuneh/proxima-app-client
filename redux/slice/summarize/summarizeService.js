import axios from "axios";

const summarize = async(summarizeData) => {
    const res = await axios.post('/api/summarize/summarize', summarizeData)

    return res.data
}

const summarizeService = {
    summarize
}

export default summarizeService
