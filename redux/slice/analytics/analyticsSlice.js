import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import analyticsService from './analyticsService'

const initialState = {
    countchats: null,
    cumulativehourlychats: null,
    counthourlychats: null,
    countescalatedissues: null,
    hourlycountescalatedissues: null,
    communicationchannels: null,
    engagementfrequency: null,
    hourlyaverageresponsetime: null,
    hourlyclientsatisfaction: null,
    leasttopics: null,
    clientsatisfaction: null,
    populartopics: null,
    clientsaverageage: null,
    clientcitydistribution: null,
    countrydistribution: null,
    genderdistribution: null,
    statedistribution: null,
    averagecomments: null,
    communitygrowthrate: null,
    communitymembers: null,
    communityrating: null,
    cumulativecomments: null,
    cumulativeissues: null,
    uniquecomments: null,
    cumulativevoicemessage: null,
    averagevoicemessageperchat: null,
    issueuserrelation: null,
    commentsuserrelation: null,

    // average comments
    isAverageCommentsError: false,
    isAverageCommentsSuccess: false,
    isAverageCommentsLoading: false,
    isAverageCommentsMessage: '',

    // average voice message per chat
    isAverageVoiceMessagesPerChatError: false,
    isAverageVoiceMessagesPerChatSuccess: false,
    isAverageVoiceMessagesPerChatLoading: false,
    isAverageVoiceMessagesPerChatMessage: '',

    // client city distribution
    isClientCityDistributionError: false,
    isClientCityDistributionSuccess: false,
    isClientCityDistributionLoading: false,
    isClientCityDistributionMessage: '',

    // clientsatisfaction
    isClientSatisfactionError: false,
    isClientSatisfactionSuccess: false,
    isClientSatisfactionLoading: false,
    isClientSatisfactionMessage: '',

    // clients average age
    isClientsAverageAgeError: false,
    isClientsAverageAgeSuccess: false,
    isClientsAverageAgeLoading: false,
    isClientsAverageAgeMessage: '',

    // communication channels
    isCommunicationChannelsError: false,
    isCommunicationChannelsSuccess: false,
    isCommunicationChannelsLoading: false,
    isCommunicationChannelsMessage: '',

    // community growth rate
    isCommunityGrowthRateError: false,
    isCommunityGrowthRateSuccess: false,
    isCommunityGrowthRateLoading: false,
    isCommunityGrowthRateMessage: '',

    // community members
    isCommunityMembersError: false,
    isCommunityMembersSuccess: false,
    isCommunityMembersLoading: false,
    isCommunityMembersMessage: '',

    // community rating
    isCommunityRatingError: false,
    isCommunityRatingSuccess: false,
    isCommunityRatingLoading: false,
    isCommunityRatingMessage: '',

    // count chats
    isCountChatsError: false,
    isCountChatsSuccess: false,
    isCountChatsLoading: false,
    isCountChatsMessage: '',

    // count escalated issues
    isCountEscalatedIssuesError: false,
    isCountEscalatedIssuesSuccess: false,
    isCountEscalatedIssuesLoading: false,
    isCountEscalatedIssuesMessage: '',

    // count hourly chats
    isCountHourlyChatsError: false,
    isCountHourlyChatsSuccess: false,
    isCountHourlyChatsLoading: false,
    isCountHourlyChatsMessage: '',

    // country distribution
    isCountryDistributionError: false,
    isCountryDistributionSuccess: false,
    isCountryDistributionLoading: false,
    isCountryDistributionMessage: '',

    // cumulative comments
    isCumulativeCommentsError: false,
    isCumulativeCommentsSuccess: false,
    isCumulativeCommentsLoading: false,
    isCumulativeCommentsMessage: '',

    // cumulative hourly chats
    isCumulativeHourlyChatsError: false,
    isCumulativeHourlyChatsSuccess: false,
    isCumulativeHourlyChatsLoading: false,
    isCumulativeHourlyChatsMessage: '',

    // cumulative issues
    isCumulativeIssuesError: false,
    isCumulativeIssuesSuccess: false,
    isCumulativeIssuesLoading: false,
    isCumulativeIssuesMessage: '',

    // cumulative voice message
    isCumulativeVoiceMessageError: false,
    isCumulativeVoiceMessageSuccess: false,
    isCumulativeVoiceMessageLoading: false,
    isCumulativeVoiceMessageMessage: '',

    // engagement frequency
    isEngagementFrequencyError: false,
    isEngagementFrequencySuccess: false,
    isEngagementFrequencyLoading: false,
    isEngagementFrequencyMessage: '',

    // gender distribution
    isGenderDistributionError: false,
    isGenderDistributionSuccess: false,
    isGenderDistributionLoading: false,
    isGenderDistributionMessage: '',

    // hourly average response time
    isHourlyAverageResponseTimeError: false,
    isHourlyAverageResponseTimeSuccess: false,
    isHourlyAverageResponseTimeLoading: false,
    isHourlyAverageResponseTimeMessage: '',

    // hourly count escalated issues
    isHourlyCountEscalatedIssuesError: false,
    isHourlyCountEscalatedIssuesSuccess: false,
    isHourlyCountEscalatedIssuesLoading: false,
    isHourlyCountEscalatedIssuesMessage: '',

    // least topics
    isLeastTopicsError: false,
    isLeastTopicsSuccess: false,
    isLeastTopicsLoading: false,
    isLeastTopicsMessage: '',

    // popular topics
    isPopularTopicsError: false,
    isPopularTopicsSuccess: false,
    isPopularTopicsLoading: false,
    isPopularTopicsMessage: '',

    // state distribution
    isStateDistributionError: false,
    isStateDistributionSuccess: false,
    isStateDistributionLoading: false,
    isStateDistributionMessage: '',

    // state distribution
    isUniqueCommentsError: false,
    isUniqueCommentsSuccess: false,
    isUniqueCommentsLoading: false,
    isUniqueCommentsMessage: '',

    // issue user relation
    isIssueUserRelationError: false,
    isIssueUserRelationSuccess: false,
    isIssueUserRelationLoading: false,
    isIssueUserRelationMessage: false,

    // comments user relation
    isCommentsUserRelationError: null,
    isCommentsUserRelationSuccess: null,
    isCommentsUserRelationLoading: null,
    isCommentsUserRelationMessage: null,
}

// Average number of comments per issue for a tenant
export const issueuserrelation = createAsyncThunk('analytics/issueuserrelation', async (user, thunkAPI) => {
    try {
        return await analyticsService.issueuserrelation(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Average number of comments per issue for a tenant
export const commentsuserrelation = createAsyncThunk('analytics/commentsuserrelation', async (user, thunkAPI) => {
    try {
        return await analyticsService.commentsuserrelation(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Average number of comments per issue for a tenant
export const averagecomments = createAsyncThunk('analytics/averagecomments', async (user, thunkAPI) => {
    try {
        return await analyticsService.averagecomments(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Average number of voice messages sent in a chat
export const averagevoicemessageperchat = createAsyncThunk('analytics/averagevoicemessageperchat', async (user, thunkAPI) => {
    try {
        return await analyticsService.averagevoicemessageperchat(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// City distribution of clients talking to a tenant
export const clientcitydistribution = createAsyncThunk('analytics/clientcitydistribution', async (user, thunkAPI) => {
    try {
        return await analyticsService.clientcitydistribution(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// All client satisfaction chats beetween a tenant and it's clients
export const clientsatisfaction = createAsyncThunk('analytics/clientsatisfaction', async (user, thunkAPI) => {
    try {
        return await analyticsService.clientsatisfaction(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Average age of clients talking to a tenant
export const clientsaverageage = createAsyncThunk('analytics/clientsaverageage', async (user, thunkAPI) => {
    try {
        return await analyticsService.clientsaverageage(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Clients communication channels with their tenants
export const communicationchannels = createAsyncThunk('analytics/communicationchannels', async (user, thunkAPI) => {
    try {
        return await analyticsService.communicationchannels(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// How the community is growing
export const communitygrowthrate = createAsyncThunk('analytics/communitygrowthrate', async (user, thunkAPI) => {
    try {
        return await analyticsService.communitygrowthrate(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Total number of members belonging to a particular community in atea tenant
export const communitymembers = createAsyncThunk('analytics/communitymembers', async (user, thunkAPI) => {
    try {
        return await analyticsService.communitymembers(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Community rating based on users
export const communityrating = createAsyncThunk('analytics/communityrating', async (user, thunkAPI) => {
    try {
        return await analyticsService.communityrating(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// all tenant chats
export const countchats = createAsyncThunk('analytics/countchats', async (user, thunkAPI) => {
    try {
        return await analyticsService.countchats(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Count all escalated issues in for a tenant
export const countescalatedissues = createAsyncThunk('analytics/countescalatedissues', async (user, thunkAPI) => {
    try {
        return await analyticsService.countescalatedissues(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// All tanant chats in the last hour
export const counthourlychats = createAsyncThunk('analytics/counthourlychats', async (user, thunkAPI) => {
    try {
        return await analyticsService.counthourlychats(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Country distribution of clients talking to a tenant
export const countrydistribution = createAsyncThunk('analytics/countrydistribution', async (user, thunkAPI) => {
    try {
        return await analyticsService.countrydistribution(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Cumulative comments issue threads for all issues for tenant
export const cumulativecomments = createAsyncThunk('analytics/cumulativecomments', async (user, thunkAPI) => {
    try {
        return await analyticsService.cumulativecomments(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// All tanant chats in the last hour
export const cumulativehourlychats = createAsyncThunk('analytics/cumulativehourlychats', async (user, thunkAPI) => {
    try {
        return await analyticsService.cumulativehourlychats(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// All issues related to a tenant
export const cumulativeissues = createAsyncThunk('analytics/cumulativeissues', async (user, thunkAPI) => {
    try {
        return await analyticsService.cumulativeissues(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Total number of voice messages sent to all chat associated with a particular tenant
export const cumulativevoicemessage = createAsyncThunk('analytics/cumulativevoicemessage', async (user, thunkAPI) => {
    try {
        return await analyticsService.cumulativevoicemessage(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// How frequent clients engage with tenants
export const engagementfrequency = createAsyncThunk('analytics/engagementfrequency', async (user, thunkAPI) => {
    try {
        return await analyticsService.engagementfrequency(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Gender distribution of clients talking to a tenant
export const genderdistribution = createAsyncThunk('analytics/genderdistribution', async (user, thunkAPI) => {
    try {
        return await analyticsService.genderdistribution(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// // hourly average response time during ineractions
export const hourlyaverageresponsetime = createAsyncThunk('analytics/hourlyaverageresponsetime', async (user, thunkAPI) => {
    try {
        return await analyticsService.hourlyaverageresponsetime(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Countr all escalated issues in the last one hour for a tenant
export const hourlycountescalatedissues = createAsyncThunk('analytics/hourlycountescalatedissues', async (user, thunkAPI) => {
    try {
        return await analyticsService.hourlycountescalatedissues(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Least enanaged topics for a tenant
export const leasttopics = createAsyncThunk('analytics/leasttopics', async (user, thunkAPI) => {
    try {
        return await analyticsService.leasttopics(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Most popular topics for a tenant
export const populartopics = createAsyncThunk('analytics/populartopics', async (user, thunkAPI) => {
    try {
        return await analyticsService.populartopics(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// State distribution of clients talking to a tenant
export const statedistribution = createAsyncThunk('analytics/statedistribution', async (user, thunkAPI) => {
    try {
        return await analyticsService.statedistribution(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Unique comments by clients on issues of a tenant
export const uniquecomments = createAsyncThunk('analytics/uniquecomments', async (user, thunkAPI) => {
    try {
        return await analyticsService.uniquecomments(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const analyticsSlice = createSlice({
    name: 'analytics',
    initialState,
    reducers: {
        // function to reset values to initial state
        // NOTE: THIS NEEDS TO BE UPDATED!!!!!!!!!!!!!!!!!
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.isMessage = ''
        }
    },
    // asynchronous fxns
    extraReducers: (builder) => {
        builder
            // average comments
            .addCase(averagecomments.pending, (state) => {
                state.isAverageCommentsLoading = true
            })
            .addCase(averagecomments.fulfilled, (state, action) => {
                state.isAverageCommentsLoading = false
                state.isAverageCommentsSuccess = true
                state.averagecomments = action.payload
            })
            .addCase(averagecomments.rejected, (state, action) => {
                state.isAverageCommentsLoading = false
                state.isAverageCommentsError = true
                state.isAverageCommentsMessage = action.payload
                state.averagecomments = null 
            })

            // average voice messages per chat
            .addCase(averagevoicemessageperchat.pending, (state) => {
                state.isAverageVoiceMessagesPerChatLoading = true
            })
            .addCase(averagevoicemessageperchat.fulfilled, (state, action) => {
                state.isAverageVoiceMessagesPerChatLoading = false
                state.isAverageVoiceMessagesPerChatSuccess = true
                state.averagevoicemessageperchat= action.payload
            })
            .addCase(averagevoicemessageperchat.rejected, (state, action) => {
                state.isAverageVoiceMessagesPerChatLoading = false
                state.isAverageVoiceMessagesPerChatError = true
                state.isAverageVoiceMessagesPerChatMessage = action.payload
                state.averagevoicemessageperchat= null 
            })

            // client city distribution
            .addCase(clientcitydistribution.pending, (state) => {
                state.isClientCityDistributionLoading = true
            })
            .addCase(clientcitydistribution.fulfilled, (state, action) => {
                state.isClientCityDistributionLoading = false
                state.isClientCityDistributionSuccess = true
                state.clientcitydistribution = action.payload
            })
            .addCase(clientcitydistribution.rejected, (state, action) => {
                state.isClientCityDistributionLoading = false
                state.isClientCityDistributionError = true
                state.isClientCityDistributionMessage = action.payload
                state.clientcitydistribution = null 
            })

            // client satisfaction
            .addCase(clientsatisfaction.pending, (state) => {
                state.isClientSatisfactionLoading = true
            })
            .addCase(clientsatisfaction.fulfilled, (state, action) => {
                state.isClientSatisfactionLoading = false
                state.isClientSatisfactionSuccess = true
                state.clientsatisfaction = action.payload
            })
            .addCase(clientsatisfaction.rejected, (state, action) => {
                state.isClientSatisfactionLoading = false
                state.isClientSatisfactionError = true
                state.isClientSatisfactionMessage = action.payload
                state.clientsatisfaction = null 
            })

            // clients average age
            .addCase(clientsaverageage.pending, (state) => {
                state.isClientsAverageAgeLoading = true
            })
            .addCase(clientsaverageage.fulfilled, (state, action) => {
                state.isClientsAverageAgeLoading = false
                state.isClientsAverageAgeSuccess = true
                state.clientsaverageage = action.payload
            })
            .addCase(clientsaverageage.rejected, (state, action) => {
                state.isClientsAverageAgeLoading = false
                state.isClientsAverageAgeError = true
                state.isClientsAverageAgeMessage = action.payload
                state.clientsaverageage = null 
            })

            // communication channels
            .addCase(communicationchannels.pending, (state) => {
                state.isCommunicationChannelsLoading = true
            })
            .addCase(communicationchannels.fulfilled, (state, action) => {
                state.isCommunicationChannelsLoading = false
                state.isCommunicationChannelsSuccess = true
                state.communicationchannels = action.payload
            })
            .addCase(communicationchannels.rejected, (state, action) => {
                state.isCommunicationChannelsLoading = false
                state.isCommunicationChannelsError = true
                state.isCommunicationChannelsMessage = action.payload
                state.communicationchannels = null 
            })

            // community growth rate
            .addCase(communitygrowthrate.pending, (state) => {
                state.isCommunityGrowthRateLoading = true
            })
            .addCase(communitygrowthrate.fulfilled, (state, action) => {
                state.isCommunityGrowthRateLoading = false
                state.isCommunityGrowthRateSuccess = true
                state.communitygrowthrate = action.payload
            })
            .addCase(communitygrowthrate.rejected, (state, action) => {
                state.isCommunityGrowthRateLoading = false
                state.isCommunityGrowthRateError = true
                state.isCommunityGrowthRateMessage = action.payload
                state.communitygrowthrate = null 
            })

            // community members
            .addCase(communitymembers.pending, (state) => {
                state.isCommunityMembersLoading = true
            })
            .addCase(communitymembers.fulfilled, (state, action) => {
                state.isCommunityMembersLoading = false
                state.isCommunityMembersSuccess = true
                state.communitymembers = action.payload
            })
            .addCase(communitymembers.rejected, (state, action) => {
                state.isCommunityMembersLoading = false
                state.isCommunityMembersError = true
                state.isCommunityMembersMessage = action.payload
                state.communitymembers = null 
            })

            // community rating
            .addCase(communityrating.pending, (state) => {
                state.isCommunityRatingLoading = true
            })
            .addCase(communityrating.fulfilled, (state, action) => {
                state.isCommunityRatingLoading = false
                state.isCommunityRatingSuccess = true
                state.communityrating = action.payload
            })
            .addCase(communityrating.rejected, (state, action) => {
                state.isCommunityRatingLoading = false
                state.isCommunityRatingError = true
                state.isCommunityRatingMessage = action.payload
                state.communityrating = null 
            })

            // count chats
            .addCase(countchats.pending, (state) => {
                state.isCountChatsLoading = true
            })
            .addCase(countchats.fulfilled, (state, action) => {
                state.isCountChatsLoading = false
                state.isCountChatsSuccess = true
                state.countchats = action.payload
            })
            .addCase(countchats.rejected, (state, action) => {
                state.isCountChatsLoading = false
                state.isCountChatsError = true
                state.isCountChatsMessage = action.payload
                state.countchats = null 
            })

            // count escalated issues
            .addCase(countescalatedissues.pending, (state) => {
                state.isCountEscalatedIssuesLoading = true
            })
            .addCase(countescalatedissues.fulfilled, (state, action) => {
                state.isCountEscalatedIssuesLoading = false
                state.isCountEscalatedIssuesSuccess = true
                state.countescalatedissues = action.payload
            })
            .addCase(countescalatedissues.rejected, (state, action) => {
                state.isCountEscalatedIssuesLoading = false
                state.isCountEscalatedIssuesError = true
                state.isCountEscalatedIssuesMessage = action.payload
                state.countescalatedissues = null 
            })

            // count hourly chats
            .addCase(counthourlychats.pending, (state) => {
                state.isCountHourlyChatsLoading = true
            })
            .addCase(counthourlychats.fulfilled, (state, action) => {
                state.isCountHourlyChatsLoading = false
                state.isCountHourlyChatsSuccess = true
                state.counthourlychats = action.payload
            })
            .addCase(counthourlychats.rejected, (state, action) => {
                state.isCountHourlyChatsLoading = false
                state.isCountHourlyChatsError = true
                state.isCountHourlyChatsMessage = action.payload
                state.counthourlychats = null 
            })

            // country distribution
            .addCase(countrydistribution.pending, (state) => {
                state.isCountryDistributionLoading = true
            })
            .addCase(countrydistribution.fulfilled, (state, action) => {
                state.isCountryDistributionLoading = false
                state.isCountryDistributionSuccess = true
                state.countrydistribution = action.payload
            })
            .addCase(countrydistribution.rejected, (state, action) => {
                state.isCountryDistributionLoading = false
                state.isCountryDistributionError = true
                state.isCountryDistributionMessage = action.payload
                state.countrydistribution = null 
            })

            // cumulative comments
            .addCase(cumulativecomments.pending, (state) => {
                state.isCumulativeCommentsLoading = true
            })
            .addCase(cumulativecomments.fulfilled, (state, action) => {
                state.isCumulativeCommentsLoading = false
                state.isCumulativeCommentsSuccess = true
                state.cumulativecomments = action.payload
            })
            .addCase(cumulativecomments.rejected, (state, action) => {
                state.isCumulativeCommentsLoading = false
                state.isCumulativeCommentsError = true
                state.isCumulativeCommentsMessage = action.payload
                state.cumulativecomments = null 
            })

            // cumulative hourly chats
            .addCase(cumulativehourlychats.pending, (state) => {
                state.isCumulativeHourlyChatsLoading = true
            })
            .addCase(cumulativehourlychats.fulfilled, (state, action) => {
                state.isCumulativeHourlyChatsLoading = false
                state.isCumulativeHourlyChatsSuccess = true
                state.cumulativehourlychats = action.payload
            })
            .addCase(cumulativehourlychats.rejected, (state, action) => {
                state.isCumulativeHourlyChatsLoading = false
                state.isCumulativeHourlyChatsError = true
                state.isCumulativeHourlyChatsMessage = action.payload
                state.cumulativehourlychats = null 
            })

            // cumulative issues
            .addCase(cumulativeissues.pending, (state) => {
                state.isCumulativeIssuesLoading = true
            })
            .addCase(cumulativeissues.fulfilled, (state, action) => {
                state.isCumulativeIssuesLoading = false
                state.isCumulativeIssuesSuccess = true
                state.cumulativeissues = action.payload
            })
            .addCase(cumulativeissues.rejected, (state, action) => {
                state.isCumulativeIssuesLoading = false
                state.isCumulativeIssuesError = true
                state.isCumulativeIssuesMessage = action.payload
                state.cumulativeissues = null 
            })

            // cumulative voice message
            .addCase(cumulativevoicemessage.pending, (state) => {
                state.isCumulativeVoiceMessageLoading = true
            })
            .addCase(cumulativevoicemessage.fulfilled, (state, action) => {
                state.isCumulativeVoiceMessageLoading = false
                state.isCumulativeVoiceMessageSuccess = true
                state.cumulativevoicemessage = action.payload
            })
            .addCase(cumulativevoicemessage.rejected, (state, action) => {
                state.isCumulativeVoiceMessageLoading = false
                state.isCumulativeVoiceMessageError = true
                state.isCumulativeVoiceMessageMessage = action.payload
                state.cumulativevoicemessage = null 
            })

            // engagement frequency
            .addCase(engagementfrequency.pending, (state) => {
                state.isEngagementFrequencyLoading = true
            })
            .addCase(engagementfrequency.fulfilled, (state, action) => {
                state.isEngagementFrequencyLoading = false
                state.isEngagementFrequencySuccess = true
                state.engagementfrequency = action.payload
            })
            .addCase(engagementfrequency.rejected, (state, action) => {
                state.isEngagementFrequencyLoading = false
                state.isEngagementFrequencyError = true
                state.isEngagementFrequencyMessage = action.payload
                state.engagementfrequency = null 
            })

            // gender distribution
            .addCase(genderdistribution.pending, (state) => {
                state.isGenderDistributionLoading = true
            })
            .addCase(genderdistribution.fulfilled, (state, action) => {
                state.isGenderDistributionLoading = false
                state.isGenderDistributionSuccess = true
                state.genderdistribution = action.payload
            })
            .addCase(genderdistribution.rejected, (state, action) => {
                state.isGenderDistributionLoading = false
                state.isGenderDistributionError = true
                state.isGenderDistributionMessage = action.payload
                state.genderdistribution = null 
            })

            // hourly avarage response time
            .addCase(hourlyaverageresponsetime.pending, (state) => {
                state.isHourlyAverageResponseTimeLoading = true
            })
            .addCase(hourlyaverageresponsetime.fulfilled, (state, action) => {
                state.isHourlyAverageResponseTimeLoading = false
                state.isHourlyAverageResponseTimeSuccess = true
                state.hourlyaverageresponsetime = action.payload
            })
            .addCase(hourlyaverageresponsetime.rejected, (state, action) => {
                state.isHourlyAverageResponseTimeLoading = false
                state.isHourlyAverageResponseTimeError = true
                state.isHourlyAverageResponseTimeMessage = action.payload
                state.hourlyaverageresponsetime = null 
            })

            // hourly count escalated issues
            .addCase(hourlycountescalatedissues.pending, (state) => {
                state.isHourlyCountEscalatedIssuesLoading = true
            })
            .addCase(hourlycountescalatedissues.fulfilled, (state, action) => {
                state.isHourlyCountEscalatedIssuesLoading = false
                state.isHourlyCountEscalatedIssuesSuccess = true
                state.hourlycountescalatedissues = action.payload
            })
            .addCase(hourlycountescalatedissues.rejected, (state, action) => {
                state.isHourlyCountEscalatedIssuesLoading = false
                state.isHourlyCountEscalatedIssuesError = true
                state.isHourlyCountEscalatedIssuesMessage = action.payload
                state.hourlycountescalatedissues = null 
            })

            // least topics
            .addCase(leasttopics.pending, (state) => {
                state.isLeastTopicsLoading = true
            })
            .addCase(leasttopics.fulfilled, (state, action) => {
                state.isLeastTopicsLoading = false
                state.isLeastTopicsSuccess = true
                state.leasttopics = action.payload
            })
            .addCase(leasttopics.rejected, (state, action) => {
                state.isLeastTopicsLoading = false
                state.isLeastTopicsError = true
                state.isLeastTopicsMessage = action.payload
                state.leasttopics = null 
            })

            // popular topics
            .addCase(populartopics.pending, (state) => {
                state.isPopularTopicsLoading = true
            })
            .addCase(populartopics.fulfilled, (state, action) => {
                state.isPopularTopicsLoading = false
                state.isPopularTopicsSuccess = true
                state.populartopics = action.payload
            })
            .addCase(populartopics.rejected, (state, action) => {
                state.isPopularTopicsLoading = false
                state.isPopularTopicsError = true
                state.isPopularTopicsMessage = action.payload
                state.populartopics = null 
            })

            // state distribution
            .addCase(statedistribution.pending, (state) => {
                state.isStateDistributionLoading = true
            })
            .addCase(statedistribution.fulfilled, (state, action) => {
                state.isStateDistributionLoading = false
                state.isStateDistributionSuccess = true
                state.statedistribution = action.payload
            })
            .addCase(statedistribution.rejected, (state, action) => {
                state.isStateDistributionLoading = false
                state.isStateDistributionError = true
                state.isStateDistributionMessage = action.payload
                state.statedistribution = null 
            })

            // unique comments
            .addCase(uniquecomments.pending, (state) => {
                state.isUniqueCommentsLoading = true
            })
            .addCase(uniquecomments.fulfilled, (state, action) => {
                state.isUniqueCommentsLoading = false
                state.isUniqueCommentsSuccess = true
                state.uniquecomments = action.payload
            })
            .addCase(uniquecomments.rejected, (state, action) => {
                state.isUniqueCommentsLoading = false
                state.isUniqueCommentsError = true
                state.isUniqueCommentsMessage = action.payload
                state.uniquecomments = null 
            })

            // issue user relation
            .addCase(issueuserrelation.pending, (state) => {
                state.isIssueUserRelationLoading = true
            })
            .addCase(issueuserrelation.fulfilled, (state, action) => {
                state.isIssueUserRelationLoading = false
                state.isIssueUserRelationSuccess = true
                state.issueuserrelation = action.payload
            })
            .addCase(issueuserrelation.rejected, (state, action) => {
                state.isIssueUserRelationLoading = false
                state.isIssueUserRelationError = true
                state.isIssueUserRelationMessage = action.payload
                state.issueuserrelation = null 
            })

            // comments user relation
            .addCase(commentsuserrelation.pending, (state) => {
                state.isCommentsUserRelationLoading = true
            })
            .addCase(commentsuserrelation.fulfilled, (state, action) => {
                state.isCommentsUserRelationLoading = false
                state.isCommentsUserRelationSuccess = true
                state.issueuserrelation = action.payload
            })
            .addCase(commentsuserrelation.rejected, (state, action) => {
                state.isCommentsUserRelationLoading = false
                state.isCommentsUserRelationError = true
                state.isCommentsUserRelationMessage = action.payload
                state.issueuserrelation = null 
            })
    }
})

export default analyticsSlice.reducer