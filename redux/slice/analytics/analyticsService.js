import axios from 'axios'

const averageresponsetime = async (analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/averageresponsetime', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const averagecomments = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/averagecomments', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const averagevoicemessageperchat  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/averagevoicemessageperchat', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const clientcitydistribution  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/clientcitydistribution', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const clientsatisfaction  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/clientsatisfaction', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const clientsaverageage  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/clientsaverageage', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const communicationchannels  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/communicationchannels', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const communitygrowthrate  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/communitygrowthrate', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const communitymembers  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/communitymembers', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const communityrating  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/communityrating', analyticsData)

        return data
    } catch (error) {
        throw data
    }
}

const countchats  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/countchats', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const countescalatedissues  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/countescalatedissues', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const counthourlychats  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/counthourlychats', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const countrydistribution  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/countrydistribution', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const cumulativecomments  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/cumulativecomments', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const cumulativehourlychats  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/cumulativehourlychats', analyticsData)

        return data   
    } catch (error) {
        throw error
    }
}

const cumulativeissues  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/cumulativeissues', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const cumulativevoicemessage  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/cumulativevoicemessage', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const engagementfrequency  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/engagementfrequency', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const genderdistribution  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/genderdistribution', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const hourlyaverageresponsetime  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/hourlyaverageresponsetime', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const hourlycountescalatedissues  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/hourlycountescalatedissues', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const hourlyclientsatisfaction = async (analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/hourlyclientsatisfaction', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const leasttopics  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/leasttopics', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const populartopics  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/populartopics', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const statedistribution  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/statedistribution', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const uniquecomments  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/statedistribution', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const issueuserrelation  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/statedistribution', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const commentsuserrelation  = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/statedistribution', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

// added 
const surveyratings = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/surveyratings', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const surveyresponserate = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/surveyresponserate', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const averagesurveyrunperiod = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/averagesurveyrunperiod', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const totalsurveys = async(analyticsData) => {
    try {
        const { data } = await axios.post('/api/analytics/totalsurveys', analyticsData)

        return data
    } catch (error) {
        throw error
    }
}

const analyticsService = {
    averageresponsetime,
    averagecomments,
    averagevoicemessageperchat,
    clientcitydistribution,
    clientsatisfaction,
    clientsaverageage,
    communicationchannels,
    communitygrowthrate,
    communitymembers,
    communityrating,
    countchats,
    countescalatedissues,
    counthourlychats,
    countrydistribution,
    cumulativecomments,
    cumulativehourlychats,
    cumulativeissues,
    cumulativevoicemessage,
    engagementfrequency,
    genderdistribution,
    hourlyaverageresponsetime,
    hourlycountescalatedissues,
    hourlyclientsatisfaction,
    leasttopics,
    populartopics,
    statedistribution,
    uniquecomments,
    issueuserrelation,
    commentsuserrelation,

    // additions
    surveyratings,
    surveyresponserate,
    averagesurveyrunperiod,
    totalsurveys,
}

export default analyticsService