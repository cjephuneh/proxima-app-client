import axios from 'axios'

// Get tenant predicted interactions
const chatInteractions = async(predictiveData) => {
    const res = await axios.post('/api/predictive/chat/interactions', predictiveData)

    return res.data
}

// get tenant predicted topics
const chatTopics = async(predictiveData) => {
    const res = await axios.post('/api/predictive/chat/topics', predictiveData)

    return res.data
}

// Get tenant escalated chats
const chatEscalatedChats = async(predictiveData) => {
    const res = await axios.post('/api/predictive/chat/escalatedchats', predictiveData)

    return res.data
}

// Get tenant predicted gender distribution interaction predictions
const clientGenderDistribution = async(predictiveData) => {
    const res = await axios.post('/api/predictive/client/genderdistribution', predictiveData)

    return res.data
}

// Get tenant predicted unique client interaction predictions
const clientUniqueClients = async(predictiveData) => {
    const res = await axios.post('/api/predictive/client/uniqueclients', predictiveData)

    return res.data
}

// Get community growth rate predictions
const communityGrowthRate = async(predictiveData) => {
    const res = await axios.post('/api/predictive/community/growthrate', predictiveData)

    return res.data
}

// Get community involvements predictions
const communityInvolvements = async(predictiveData) => {
    const res = await axios.post('/api/predictive/community/involvements', predictiveData)

    return res.data
}

// predictive service object with all the functions
const predictiveService = {
    chatInteractions,
    chatTopics,
    chatEscalatedChats,
    clientGenderDistribution,
    clientUniqueClients,
    communityGrowthRate,
    communityInvolvements
}

// export the predictiveService object
export default predictiveService