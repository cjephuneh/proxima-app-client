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
    averageresponsetime: null,
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
    surveyratings: null,
    surveyresponserate: null,
    averagesurveyrunperiod: null,
    totalsurveys: null,

    // => added
    // surveyratings,
    isSurveyRatingsError: false,
    isSurveyRatingsSuccess: false,
    isSurveyRatingsLoading: false,
    isSurveyRatingsMessage: '',

    // surveyresponserate,
    isSurveyResponseRateError: false, 
    isSurveyResponseRateSuccess: false,
    isSurveyResponseRateLoading: false,
    isSurveyResponseRateMessage: '',   

    // averagesurveyrunperiod,
    isAverageSurveyRunPeriodError: false, 
    isAverageSurveyRunPeriodSuccess: false,
    isAverageSurveyRunPeriodLoading: false,
    isAverageSurveyRunPeriodMessage: '',

    // totalsurveys,
    isTotalSurveysError: false,
    isTotalSurveysSuccess: false,
    isTotalSurveysLoading: false,
    isTotalSurveysMessage: false,

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

    // average response time
    isAverageResponseTimeError: false,
    isAverageResponseTimeSuccess: false,
    isAverageResponseTimeLoading: false,
    isAverageResponseTimeMessage: '',

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

    // unique comments
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
export const descriptive_issueuserrelation = createAsyncThunk('analytics/issueuserrelation', async (user, thunkAPI) => {
    try {
        return await analyticsService.issueuserrelation(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Average number of comments per issue for a tenant
export const descriptive_commentsuserrelation = createAsyncThunk('analytics/commentsuserrelation', async (user, thunkAPI) => {
    try {
        return await analyticsService.commentsuserrelation(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Average number of comments per issue for a tenant
export const descriptive_averagecomments = createAsyncThunk('analytics/averagecomments', async (user, thunkAPI) => {
    try {
        return await analyticsService.averagecomments(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Average number of voice messages sent in a chat
export const descriptive_averagevoicemessageperchat = createAsyncThunk('analytics/averagevoicemessageperchat', async (user, thunkAPI) => {
    try {
        return await analyticsService.averagevoicemessageperchat(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// City distribution of clients talking to a tenant
export const descriptive_clientcitydistribution = createAsyncThunk('analytics/clientcitydistribution', async (user, thunkAPI) => {
    try {
        return await analyticsService.clientcitydistribution(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// All client satisfaction chats beetween a tenant and it's clients
export const descriptive_clientsatisfaction = createAsyncThunk('analytics/clientsatisfaction', async (user, thunkAPI) => {
    try {
        return await analyticsService.clientsatisfaction(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Average age of clients talking to a tenant
export const descriptive_clientsaverageage = createAsyncThunk('analytics/clientsaverageage', async (user, thunkAPI) => {
    try {
        return await analyticsService.clientsaverageage(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Clients communication channels with their tenants
export const descriptive_communicationchannels = createAsyncThunk('analytics/communicationchannels', async (user, thunkAPI) => {
    try {
        return await analyticsService.communicationchannels(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// How the community is growing
export const descriptive_communitygrowthrate = createAsyncThunk('analytics/communitygrowthrate', async (user, thunkAPI) => {
    try {
        return await analyticsService.communitygrowthrate(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Total number of members belonging to a particular community in atea tenant
export const descriptive_communitymembers = createAsyncThunk('analytics/communitymembers', async (user, thunkAPI) => {
    try {
        return await analyticsService.communitymembers(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Community rating based on users
export const descriptive_communityrating = createAsyncThunk('analytics/communityrating', async (user, thunkAPI) => {
    try {
        return await analyticsService.communityrating(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// all tenant chats
export const descriptive_countchats = createAsyncThunk('analytics/countchats', async (user, thunkAPI) => {
    try {
        return await analyticsService.countchats(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Count all escalated issues in for a tenant
export const descriptive_countescalatedissues = createAsyncThunk('analytics/countescalatedissues', async (user, thunkAPI) => {
    try {
        return await analyticsService.countescalatedissues(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// All tanant chats in the last hour
export const descriptive_counthourlychats = createAsyncThunk('analytics/counthourlychats', async (user, thunkAPI) => {
    try {
        return await analyticsService.counthourlychats(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Country distribution of clients talking to a tenant
export const descriptive_countrydistribution = createAsyncThunk('analytics/countrydistribution', async (user, thunkAPI) => {
    try {
        return await analyticsService.countrydistribution(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Cumulative comments issue threads for all issues for tenant
export const descriptive_cumulativecomments = createAsyncThunk('analytics/cumulativecomments', async (user, thunkAPI) => {
    try {
        return await analyticsService.cumulativecomments(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// All tanant chats in the last hour
export const descriptive_cumulativehourlychats = createAsyncThunk('analytics/cumulativehourlychats', async (user, thunkAPI) => {
    try {
        return await analyticsService.cumulativehourlychats(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// All issues related to a tenant
export const descriptive_cumulativeissues = createAsyncThunk('analytics/cumulativeissues', async (user, thunkAPI) => {
    try {
        return await analyticsService.cumulativeissues(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Total number of voice messages sent to all chat associated with a particular tenant
export const descriptive_cumulativevoicemessage = createAsyncThunk('analytics/cumulativevoicemessage', async (user, thunkAPI) => {
    try {
        return await analyticsService.cumulativevoicemessage(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// How frequent clients engage with tenants
export const descriptive_engagementfrequency = createAsyncThunk('analytics/engagementfrequency', async (user, thunkAPI) => {
    try {
        return await analyticsService.engagementfrequency(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Gender distribution of clients talking to a tenant
export const descriptive_genderdistribution = createAsyncThunk('analytics/genderdistribution', async (user, thunkAPI) => {
    try {
        return await analyticsService.genderdistribution(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// // hourly average response time during ineractions
export const descriptive_hourlyaverageresponsetime = createAsyncThunk('analytics/hourlyaverageresponsetime', async (user, thunkAPI) => {
    try {
        return await analyticsService.hourlyaverageresponsetime(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// average response time during ineractions
export const descriptive_averageresponsetime = createAsyncThunk('analytics/averageresponsetime', async (user, thunkAPI) => {
    try {
        return await analyticsService.hourlyaverageresponsetime(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Countr all escalated issues in the last one hour for a tenant
export const descriptive_hourlycountescalatedissues = createAsyncThunk('analytics/hourlycountescalatedissues', async (user, thunkAPI) => {
    try {
        return await analyticsService.hourlycountescalatedissues(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Least enanaged topics for a tenant
export const descriptive_leasttopics = createAsyncThunk('analytics/leasttopics', async (user, thunkAPI) => {
    try {
        return await analyticsService.leasttopics(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Most popular topics for a tenant
export const descriptive_populartopics = createAsyncThunk('analytics/populartopics', async (user, thunkAPI) => {
    try {
        return await analyticsService.populartopics(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// State distribution of clients talking to a tenant
export const descriptive_statedistribution = createAsyncThunk('analytics/statedistribution', async (user, thunkAPI) => {
    try {
        return await analyticsService.statedistribution(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Unique comments by clients on issues of a tenant
export const descriptive_uniquecomments = createAsyncThunk('analytics/uniquecomments', async (user, thunkAPI) => {
    try {
        return await analyticsService.uniquecomments(user)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// => additions

// survey ratings
export const descriptive_surveyratings = createAsyncThunk('analytics/surveyratings', async (analyticsData, thunkAPI) => {
    try {
        return await analyticsService.surveyratings(analyticsData)
    } catch (error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// survey response rate
export const descriptive_surveyresponserate = createAsyncThunk('analytics/surveyresponserate', async (analyticsData, thunkAPI) => {
    try {
        return await analyticsService.surveyresponserate(analyticsData)
    } catch (error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// survey run period
export const descriptive_averagesurveyrunperiod = createAsyncThunk('analytics/averagesurveyrunperiod', async (analyticsData, thunkAPI) => {
    try {
        return await analyticsService.averagesurveyrunperiod(analyticsData)
    } catch (error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// survey ratings
export const descriptive_totalsurveys = createAsyncThunk('analytics/totalsurveys', async (analyticsData, thunkAPI) => {
    try {
        return await analyticsService.totalsurveys(analyticsData)
    } catch (error) {
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
            .addCase(descriptive_averagecomments.pending, (state) => {
                state.isAverageCommentsLoading = true
            })
            .addCase(descriptive_averagecomments.fulfilled, (state, action) => {
                state.isAverageCommentsLoading = false
                state.isAverageCommentsSuccess = true
                state.averagecomments = action.payload
            })
            .addCase(descriptive_averagecomments.rejected, (state, action) => {
                state.isAverageCommentsLoading = false
                state.isAverageCommentsError = true
                state.isAverageCommentsMessage = action.payload
                state.averagecomments = null 
            })

            // average voice messages per chat
            .addCase(descriptive_averagevoicemessageperchat.pending, (state) => {
                state.isAverageVoiceMessagesPerChatLoading = true
            })
            .addCase(descriptive_averagevoicemessageperchat.fulfilled, (state, action) => {
                state.isAverageVoiceMessagesPerChatLoading = false
                state.isAverageVoiceMessagesPerChatSuccess = true
                state.averagevoicemessageperchat= action.payload
            })
            .addCase(descriptive_averagevoicemessageperchat.rejected, (state, action) => {
                state.isAverageVoiceMessagesPerChatLoading = false
                state.isAverageVoiceMessagesPerChatError = true
                state.isAverageVoiceMessagesPerChatMessage = action.payload
                state.averagevoicemessageperchat= null 
            })

            // client city distribution
            .addCase(descriptive_clientcitydistribution.pending, (state) => {
                state.isClientCityDistributionLoading = true
            })
            .addCase(descriptive_clientcitydistribution.fulfilled, (state, action) => {
                state.isClientCityDistributionLoading = false
                state.isClientCityDistributionSuccess = true
                state.clientcitydistribution = action.payload
            })
            .addCase(descriptive_clientcitydistribution.rejected, (state, action) => {
                state.isClientCityDistributionLoading = false
                state.isClientCityDistributionError = true
                state.isClientCityDistributionMessage = action.payload
                state.clientcitydistribution = null 
            })

            // client satisfaction
            .addCase(descriptive_clientsatisfaction.pending, (state) => {
                state.isClientSatisfactionLoading = true
            })
            .addCase(descriptive_clientsatisfaction.fulfilled, (state, action) => {
                state.isClientSatisfactionLoading = false
                state.isClientSatisfactionSuccess = true
                state.clientsatisfaction = action.payload
            })
            .addCase(descriptive_clientsatisfaction.rejected, (state, action) => {
                state.isClientSatisfactionLoading = false
                state.isClientSatisfactionError = true
                state.isClientSatisfactionMessage = action.payload
                state.clientsatisfaction = null 
            })

            // clients average age
            .addCase(descriptive_clientsaverageage.pending, (state) => {
                state.isClientsAverageAgeLoading = true
            })
            .addCase(descriptive_clientsaverageage.fulfilled, (state, action) => {
                state.isClientsAverageAgeLoading = false
                state.isClientsAverageAgeSuccess = true
                state.clientsaverageage = action.payload
            })
            .addCase(descriptive_clientsaverageage.rejected, (state, action) => {
                state.isClientsAverageAgeLoading = false
                state.isClientsAverageAgeError = true
                state.isClientsAverageAgeMessage = action.payload
                state.clientsaverageage = null 
            })

            // communication channels
            .addCase(descriptive_communicationchannels.pending, (state) => {
                state.isCommunicationChannelsLoading = true
            })
            .addCase(descriptive_communicationchannels.fulfilled, (state, action) => {
                state.isCommunicationChannelsLoading = false
                state.isCommunicationChannelsSuccess = true
                state.communicationchannels = action.payload
            })
            .addCase(descriptive_communicationchannels.rejected, (state, action) => {
                state.isCommunicationChannelsLoading = false
                state.isCommunicationChannelsError = true
                state.isCommunicationChannelsMessage = action.payload
                state.communicationchannels = null 
            })

            // community growth rate
            .addCase(descriptive_communitygrowthrate.pending, (state) => {
                state.isCommunityGrowthRateLoading = true
            })
            .addCase(descriptive_communitygrowthrate.fulfilled, (state, action) => {
                state.isCommunityGrowthRateLoading = false
                state.isCommunityGrowthRateSuccess = true
                state.communitygrowthrate = action.payload
            })
            .addCase(descriptive_communitygrowthrate.rejected, (state, action) => {
                state.isCommunityGrowthRateLoading = false
                state.isCommunityGrowthRateError = true
                state.isCommunityGrowthRateMessage = action.payload
                state.communitygrowthrate = null 
            })

            // community members
            .addCase(descriptive_communitymembers.pending, (state) => {
                state.isCommunityMembersLoading = true
            })
            .addCase(descriptive_communitymembers.fulfilled, (state, action) => {
                state.isCommunityMembersLoading = false
                state.isCommunityMembersSuccess = true
                state.communitymembers = action.payload
            })
            .addCase(descriptive_communitymembers.rejected, (state, action) => {
                state.isCommunityMembersLoading = false
                state.isCommunityMembersError = true
                state.isCommunityMembersMessage = action.payload
                state.communitymembers = null 
            })

            // community rating
            .addCase(descriptive_communityrating.pending, (state) => {
                state.isCommunityRatingLoading = true
            })
            .addCase(descriptive_communityrating.fulfilled, (state, action) => {
                state.isCommunityRatingLoading = false
                state.isCommunityRatingSuccess = true
                state.communityrating = action.payload
            })
            .addCase(descriptive_communityrating.rejected, (state, action) => {
                state.isCommunityRatingLoading = false
                state.isCommunityRatingError = true
                state.isCommunityRatingMessage = action.payload
                state.communityrating = null 
            })

            // count chats
            .addCase(descriptive_countchats.pending, (state) => {
                state.isCountChatsLoading = true
            })
            .addCase(descriptive_countchats.fulfilled, (state, action) => {
                state.isCountChatsLoading = false
                state.isCountChatsSuccess = true
                state.countchats = action.payload
            })
            .addCase(descriptive_countchats.rejected, (state, action) => {
                state.isCountChatsLoading = false
                state.isCountChatsError = true
                state.isCountChatsMessage = action.payload
                state.countchats = null 
            })

            // count escalated issues
            .addCase(descriptive_countescalatedissues.pending, (state) => {
                state.isCountEscalatedIssuesLoading = true
            })
            .addCase(descriptive_countescalatedissues.fulfilled, (state, action) => {
                state.isCountEscalatedIssuesLoading = false
                state.isCountEscalatedIssuesSuccess = true
                state.countescalatedissues = action.payload
            })
            .addCase(descriptive_countescalatedissues.rejected, (state, action) => {
                state.isCountEscalatedIssuesLoading = false
                state.isCountEscalatedIssuesError = true
                state.isCountEscalatedIssuesMessage = action.payload
                state.countescalatedissues = null 
            })

            // count hourly chats
            .addCase(descriptive_counthourlychats.pending, (state) => {
                state.isCountHourlyChatsLoading = true
            })
            .addCase(descriptive_counthourlychats.fulfilled, (state, action) => {
                state.isCountHourlyChatsLoading = false
                state.isCountHourlyChatsSuccess = true
                state.counthourlychats = action.payload
            })
            .addCase(descriptive_counthourlychats.rejected, (state, action) => {
                state.isCountHourlyChatsLoading = false
                state.isCountHourlyChatsError = true
                state.isCountHourlyChatsMessage = action.payload
                state.counthourlychats = null 
            })

            // country distribution
            .addCase(descriptive_countrydistribution.pending, (state) => {
                state.isCountryDistributionLoading = true
            })
            .addCase(descriptive_countrydistribution.fulfilled, (state, action) => {
                state.isCountryDistributionLoading = false
                state.isCountryDistributionSuccess = true
                state.countrydistribution = action.payload
            })
            .addCase(descriptive_countrydistribution.rejected, (state, action) => {
                state.isCountryDistributionLoading = false
                state.isCountryDistributionError = true
                state.isCountryDistributionMessage = action.payload
                state.countrydistribution = null 
            })

            // cumulative comments
            .addCase(descriptive_cumulativecomments.pending, (state) => {
                state.isCumulativeCommentsLoading = true
            })
            .addCase(descriptive_cumulativecomments.fulfilled, (state, action) => {
                state.isCumulativeCommentsLoading = false
                state.isCumulativeCommentsSuccess = true
                state.cumulativecomments = action.payload
            })
            .addCase(descriptive_cumulativecomments.rejected, (state, action) => {
                state.isCumulativeCommentsLoading = false
                state.isCumulativeCommentsError = true
                state.isCumulativeCommentsMessage = action.payload
                state.cumulativecomments = null 
            })

            // cumulative hourly chats
            .addCase(descriptive_cumulativehourlychats.pending, (state) => {
                state.isCumulativeHourlyChatsLoading = true
            })
            .addCase(descriptive_cumulativehourlychats.fulfilled, (state, action) => {
                state.isCumulativeHourlyChatsLoading = false
                state.isCumulativeHourlyChatsSuccess = true
                state.cumulativehourlychats = action.payload
            })
            .addCase(descriptive_cumulativehourlychats.rejected, (state, action) => {
                state.isCumulativeHourlyChatsLoading = false
                state.isCumulativeHourlyChatsError = true
                state.isCumulativeHourlyChatsMessage = action.payload
                state.cumulativehourlychats = null 
            })

            // cumulative issues
            .addCase(descriptive_cumulativeissues.pending, (state) => {
                state.isCumulativeIssuesLoading = true
            })
            .addCase(descriptive_cumulativeissues.fulfilled, (state, action) => {
                state.isCumulativeIssuesLoading = false
                state.isCumulativeIssuesSuccess = true
                state.cumulativeissues = action.payload
            })
            .addCase(descriptive_cumulativeissues.rejected, (state, action) => {
                state.isCumulativeIssuesLoading = false
                state.isCumulativeIssuesError = true
                state.isCumulativeIssuesMessage = action.payload
                state.cumulativeissues = null 
            })

            // cumulative voice message
            .addCase(descriptive_cumulativevoicemessage.pending, (state) => {
                state.isCumulativeVoiceMessageLoading = true
            })
            .addCase(descriptive_cumulativevoicemessage.fulfilled, (state, action) => {
                state.isCumulativeVoiceMessageLoading = false
                state.isCumulativeVoiceMessageSuccess = true
                state.cumulativevoicemessage = action.payload
            })
            .addCase(descriptive_cumulativevoicemessage.rejected, (state, action) => {
                state.isCumulativeVoiceMessageLoading = false
                state.isCumulativeVoiceMessageError = true
                state.isCumulativeVoiceMessageMessage = action.payload
                state.cumulativevoicemessage = null 
            })

            // engagement frequency
            .addCase(descriptive_engagementfrequency.pending, (state) => {
                state.isEngagementFrequencyLoading = true
            })
            .addCase(descriptive_engagementfrequency.fulfilled, (state, action) => {
                state.isEngagementFrequencyLoading = false
                state.isEngagementFrequencySuccess = true
                state.engagementfrequency = action.payload
            })
            .addCase(descriptive_engagementfrequency.rejected, (state, action) => {
                state.isEngagementFrequencyLoading = false
                state.isEngagementFrequencyError = true
                state.isEngagementFrequencyMessage = action.payload
                state.engagementfrequency = null 
            })

            // gender distribution
            .addCase(descriptive_genderdistribution.pending, (state) => {
                state.isGenderDistributionLoading = true
            })
            .addCase(descriptive_genderdistribution.fulfilled, (state, action) => {
                state.isGenderDistributionLoading = false
                state.isGenderDistributionSuccess = true
                state.genderdistribution = action.payload
            })
            .addCase(descriptive_genderdistribution.rejected, (state, action) => {
                state.isGenderDistributionLoading = false
                state.isGenderDistributionError = true
                state.isGenderDistributionMessage = action.payload
                state.genderdistribution = null 
            })

            // hourly avarage response time
            .addCase(descriptive_hourlyaverageresponsetime.pending, (state) => {
                state.isHourlyAverageResponseTimeLoading = true
            })
            .addCase(descriptive_hourlyaverageresponsetime.fulfilled, (state, action) => {
                state.isHourlyAverageResponseTimeLoading = false
                state.isHourlyAverageResponseTimeSuccess = true
                state.hourlyaverageresponsetime = action.payload
            })
            .addCase(descriptive_hourlyaverageresponsetime.rejected, (state, action) => {
                state.isHourlyAverageResponseTimeLoading = false
                state.isHourlyAverageResponseTimeError = true
                state.isHourlyAverageResponseTimeMessage = action.payload
                state.hourlyaverageresponsetime = null 
            })

            // hourly count escalated issues
            .addCase(descriptive_hourlycountescalatedissues.pending, (state) => {
                state.isHourlyCountEscalatedIssuesLoading = true
            })
            .addCase(descriptive_hourlycountescalatedissues.fulfilled, (state, action) => {
                state.isHourlyCountEscalatedIssuesLoading = false
                state.isHourlyCountEscalatedIssuesSuccess = true
                state.hourlycountescalatedissues = action.payload
            })
            .addCase(descriptive_hourlycountescalatedissues.rejected, (state, action) => {
                state.isHourlyCountEscalatedIssuesLoading = false
                state.isHourlyCountEscalatedIssuesError = true
                state.isHourlyCountEscalatedIssuesMessage = action.payload
                state.hourlycountescalatedissues = null 
            })

            // least topics
            .addCase(descriptive_leasttopics.pending, (state) => {
                state.isLeastTopicsLoading = true
            })
            .addCase(descriptive_leasttopics.fulfilled, (state, action) => {
                state.isLeastTopicsLoading = false
                state.isLeastTopicsSuccess = true
                state.leasttopics = action.payload
            })
            .addCase(descriptive_leasttopics.rejected, (state, action) => {
                state.isLeastTopicsLoading = false
                state.isLeastTopicsError = true
                state.isLeastTopicsMessage = action.payload
                state.leasttopics = null 
            })

            // popular topics
            .addCase(descriptive_populartopics.pending, (state) => {
                state.isPopularTopicsLoading = true
            })
            .addCase(descriptive_populartopics.fulfilled, (state, action) => {
                state.isPopularTopicsLoading = false
                state.isPopularTopicsSuccess = true
                state.populartopics = action.payload
            })
            .addCase(descriptive_populartopics.rejected, (state, action) => {
                state.isPopularTopicsLoading = false
                state.isPopularTopicsError = true
                state.isPopularTopicsMessage = action.payload
                state.populartopics = null 
            })

            // state distribution
            .addCase(descriptive_statedistribution.pending, (state) => {
                state.isStateDistributionLoading = true
            })
            .addCase(descriptive_statedistribution.fulfilled, (state, action) => {
                state.isStateDistributionLoading = false
                state.isStateDistributionSuccess = true
                state.statedistribution = action.payload
            })
            .addCase(descriptive_statedistribution.rejected, (state, action) => {
                state.isStateDistributionLoading = false
                state.isStateDistributionError = true
                state.isStateDistributionMessage = action.payload
                state.statedistribution = null 
            })

            // unique comments
            .addCase(descriptive_uniquecomments.pending, (state) => {
                state.isUniqueCommentsLoading = true
            })
            .addCase(descriptive_uniquecomments.fulfilled, (state, action) => {
                state.isUniqueCommentsLoading = false
                state.isUniqueCommentsSuccess = true
                state.uniquecomments = action.payload
            })
            .addCase(descriptive_uniquecomments.rejected, (state, action) => {
                state.isUniqueCommentsLoading = false
                state.isUniqueCommentsError = true
                state.isUniqueCommentsMessage = action.payload
                state.uniquecomments = null 
            })

            // issue user relation
            .addCase(descriptive_issueuserrelation.pending, (state) => {
                state.isIssueUserRelationLoading = true
            })
            .addCase(descriptive_issueuserrelation.fulfilled, (state, action) => {
                state.isIssueUserRelationLoading = false
                state.isIssueUserRelationSuccess = true
                state.issueuserrelation = action.payload
            })
            .addCase(descriptive_issueuserrelation.rejected, (state, action) => {
                state.isIssueUserRelationLoading = false
                state.isIssueUserRelationError = true
                state.isIssueUserRelationMessage = action.payload
                state.issueuserrelation = null 
            })

            // comments user relation
            .addCase(descriptive_commentsuserrelation.pending, (state) => {
                state.isCommentsUserRelationLoading = true
            })
            .addCase(descriptive_commentsuserrelation.fulfilled, (state, action) => {
                state.isCommentsUserRelationLoading = false
                state.isCommentsUserRelationSuccess = true
                state.issueuserrelation = action.payload
            })
            .addCase(descriptive_commentsuserrelation.rejected, (state, action) => {
                state.isCommentsUserRelationLoading = false
                state.isCommentsUserRelationError = true
                state.isCommentsUserRelationMessage = action.payload
                state.issueuserrelation = null 
            })

            // => additions

            // survey ratings
            .addCase(descriptive_surveyratings.pending, (state) => {
                state.isSurveyRatingsLoading = true
            })
            .addCase(descriptive_surveyratings.fulfilled, (state, action) => {
                state.isSurveyRatingsLoading = false
                state.isSurveyRatingsSuccess = true
                state.surveyratings = action.payload
            })
            .addCase(descriptive_surveyratings.rejected, (state, action) => {
                state.isSurveyRatingsLoading = false
                state.isSurveyRatingsError = true
                state.isSurveyRatingsMessage = action.payload
                state.surveyratings = null 
            })

            // surveyresponserate
            .addCase(descriptive_surveyresponserate.pending, (state) => {
                state.isSurveyResponseRateLoading = true
            })
            .addCase(descriptive_surveyresponserate.fulfilled, (state, action) => {
                state.isSurveyResponseRateLoading = false
                state.isSurveyResponseRateSuccess = true
                state.surveyresponserate = action.payload
            })
            .addCase(descriptive_surveyresponserate.rejected, (state, action) => {
                state.isSurveyResponseRateLoading = false
                state.isSurveyResponseRateError = true
                state.isSurveyResponseRateMessage = action.payload
                state.surveyresponserate = null 
            })

            // averagesurveyrunperiod
            .addCase(descriptive_averagesurveyrunperiod.pending, (state) => {
                state.isAverageSurveyRunPeriodLoading = true
            })
            .addCase(descriptive_averagesurveyrunperiod.fulfilled, (state, action) => {
                state.isAverageSurveyRunPeriodLoading = false
                state.isAverageSurveyRunPeriodSuccess = true
                state.averagesurveyrunperiod = action.payload
            })
            .addCase(descriptive_averagesurveyrunperiod.rejected, (state, action) => {
                state.isAverageSurveyRunPeriodLoading = false
                state.isAverageSurveyRunPeriodError = true
                state.isAverageSurveyRunPeriodMessage = action.payload
                state.averagesurveyrunperiod = null 
            })

            // totalsurveys
            .addCase(descriptive_totalsurveys.pending, (state) => {
                state.isTotalSurveysLoading = true
            })
            .addCase(descriptive_totalsurveys.fulfilled, (state, action) => {
                state.isTotalSurveysLoading = false
                state.isTotalSurveysSuccess = true
                state.totalsurveys = action.payload
            })
            .addCase(descriptive_totalsurveys.rejected, (state, action) => {
                state.isTotalSurveysLoading = false
                state.isTotalSurveysError = true
                state.isTotalSurveysMessage = action.payload
                state.totalsurveys = null 
            })

            // averageresponsetime
            .addCase(descriptive_averageresponsetime.pending, (state) => {
                state.isAverageResponseTimeLoading = true
            })
            .addCase(descriptive_averageresponsetime.fulfilled, (state, action) => {
                state.isAverageResponseTimeLoading = false
                state.isAverageResponseTimeSuccess = true
                state.averageresponsetime = action.payload
            })
            .addCase(descriptive_averageresponsetime.rejected, (state, action) => {
                state.isAverageResponseTimeLoading = false
                state.isAverageResponseTimeError = true
                state.isAverageResponseTimeMessage = action.payload
                state.averageresponsetime = null 
            })
    }
})

export default analyticsSlice.reducer
