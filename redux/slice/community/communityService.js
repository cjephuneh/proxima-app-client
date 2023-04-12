import axios from "axios";

// retrieve a tenant community
const community = async(communityData) => {
    const res = await axios.post('/api/community/community', communityData)

    return res.data
}

// Clients to join a particular community
const joincommunity = async(communityData) => {
    const res = await axios.post('/api/community/joincommunity', communityData)

    return res.data
}

// Let users leave the community
const leavecommunity = async(communityData) => {
    const res = await axios.post('/api/community/leavecommunity', communityData)

    return res.data
}

// Retrieve thread of a particular issue
const thread = async(communityData) => {
    const res = await axios.post('/api/community/thread', communityData)

    return res.data
}

// submit and Retrieve issues
const issue = async(communityData) => {
    const res = await axios.post('/api/community/issue', communityData)

    return res.data
}

// add and retrieve comments
const comment = async(communityData) => {
    const res = await axios.post('/api/community/comment', communityData)

    return res.data
}

// like comment
const likecomment = async(communityData) => {
    const res = await axios.post('/api/community/likecomment', communityData)

    return res.data
}

// dislike comment
const dislikecomment = async(communityData) => {
    const res = await axios.post('/api/community/dislikecomment', communityData)

    return res.data
}

const communityService = {
    community,
    joincommunity,
    leavecommunity,
    thread,
    issue,
    comment,
    likecomment,
    dislikecomment
}

export default communityService