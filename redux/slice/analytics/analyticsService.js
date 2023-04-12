import axios from 'axios'

// sign in a user
const averagecomments = async(analyticsData) => {
    const res = await axios.post('/api/analytics/averagecomments', analyticsData)

    return res.data
}

const averagevoicemessageperchat  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/averagevoicemessageperchat', analyticsData)

    return res.data
}

const clientcitydistribution  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/clientcitydistribution', analyticsData)

    return res.data
}

const clientsatisfaction  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/clientsatisfaction', analyticsData)

    return res.data
}

const clientsaverageage  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/clientsaverageage', analyticsData)

    return res.data
}

const communicationchannels  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/communicationchannels', analyticsData)

    return res.data
}

const communitygrowthrate  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/communitygrowthrate', analyticsData)

    return res.data
}

const communitymembers  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/communitymembers', analyticsData)

    return res.data
}

const communityrating  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/communityrating', analyticsData)

    return res.data
}

const countchats  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/countchats', analyticsData)

    return res.data
}

const countescalatedissues  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/countescalatedissues', analyticsData)

    return res.data
}

const counthourlychats  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/counthourlychats', analyticsData)

    return res.data
}

const countrydistribution  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/countrydistribution', analyticsData)

    return res.data
}

const cumulativecomments  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/cumulativecomments', analyticsData)

    return res.data
}

const cumulativehourlychats  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/cumulativehourlychats', analyticsData)

    return res.data
}

const cumulativeissues  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/cumulativeissues', analyticsData)

    return res.data
}

const cumulativevoicemessage  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/cumulativevoicemessage', analyticsData)

    return res.data
}

const engagementfrequency  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/engagementfrequency', analyticsData)

    return res.data
}

const genderdistribution  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/genderdistribution', analyticsData)

    return res.data
}

const hourlyaverageresponsetime  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/hourlyaverageresponsetime', analyticsData)

    return res.data
}

const hourlycountescalatedissues  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/hourlycountescalatedissues', analyticsData)

    return res.data
}

const leasttopics  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/leasttopics', analyticsData)

    return res.data
}

const populartopics  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/populartopics', analyticsData)

    return res.data
}

const statedistribution  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/statedistribution', analyticsData)

    return res.data
}

const uniquecomments  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/statedistribution', analyticsData)

    return res.data
}

const issueuserrelation  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/statedistribution', analyticsData)

    return res.data
}

const commentsuserrelation  = async(analyticsData) => {
    const res = await axios.post('/api/analytics/statedistribution', analyticsData)

    return res.data
}

const analyticsService = {
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
    leasttopics,
    populartopics,
    statedistribution,
    uniquecomments,
    issueuserrelation,
    commentsuserrelation
}

export default analyticsService