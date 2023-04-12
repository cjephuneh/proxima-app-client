import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import communityService from './communityService'

const initialState = {
  community: null,
  joincommunity: null,
  leavecommunity: null,
  thread: null,
  issue: null,
  comment: null,
  likecomment: null,
  dislikecomment: null,

    // community
    isCommunityError: false,
    isCommunitySuccess: false,
    isCommunityLoading: false,
    isCommunityMessage: '',

    // joincommunity
    isJoinCommunityError: false,
    isJoinCommunitySuccess: false,
    isJoinCommunityLoading: false,
    isJoinCommunityMessage: '',

    // leavecommunity
    isLeaveCommunityError: false,
    isLeaveCommunitySuccess: false,
    isLeaveCommunityLoading: false,
    isLeaveCommunityMessage: '',

    // thread
    isThreadError: false,
    isThreadSuccess: false,
    isThreadLoading: false,
    isThreadMessage: '',

    // issue
    isIssueError: false,
    isIssueSuccess: false,
    isIssueLoading: false,
    isIssueMessage: '',

    // comment
    isCommentError: false,
    isCommentSuccess: false,
    isCommentLoading: false,
    isCommentMessage: '',

    // likecomment
    isLikeCommentError: false,
    isLikeCommentSuccess: false,
    isLikeCommentLoading: false,
    isLikeCommentMessage: '',

    // dislikecomment
    isDislikeCommentError: false,
    isDislikeCommentSuccess: false,
    isDislikeCommentLoading: false,
    isDislikeCommentMessage: ''
}

// Retrieve a tenant community
export const community = createAsyncThunk('community/community', async (communityData, thunkAPI) => {
    try {
        return await communityService.community(communityData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Clients to join a particular community
export const joincommunity = createAsyncThunk('community/joincommunity', async (communityData, thunkAPI) => {
    try {
        return await communityService.joincommunity(communityData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Let users leave the community
export const leavecommunity = createAsyncThunk('community/leavecommunity', async (communityData, thunkAPI) => {
    try {
        return await communityService.leavecommunity(communityData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Retrieve thread of a particular issue
export const thread = createAsyncThunk('community/thread', async (communityData, thunkAPI) => {
    try {
        return await communityService.thread(communityData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// submit and retrieve issue
export const issue = createAsyncThunk('community/issue', async (communityData, thunkAPI) => {
    try {
        return await communityService.issue(communityData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// add and retrieve comments
export const comment = createAsyncThunk('community/comment', async (communityData, thunkAPI) => {
    try {
        return await communityService.comment(communityData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// like a comment
export const likecomment = createAsyncThunk('community/likecomment', async (communityData, thunkAPI) => {
    try {
        return await communityService.likecomment(communityData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// dislike a comment
export const dislikecomment = createAsyncThunk('community/dislikecomment', async (communityData, thunkAPI) => {
    try {
        return await communityService.dislikecomment(communityData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const communitySlice = createSlice({
    name: 'community',
    initialState,
    reducers: {
        // function to reset values to initial state
        // reset: (state) => {
        //     state.isLoading = false
        //     state.isSuccess = false
        //     state.isError = false
        //     state.isMessage = ''
        // }
        // NOTE: REWORK THIS!!!!!!!!!!!!!!
    },
    // asynchronous fxns
    extraReducers: (builder) => {
        builder
            // community
            .addCase(community.pending, (state) => {
                state.isCommunityLoading = true
            })
            .addCase(community.fulfilled, (state, action) => {
                state.isCommunityLoading = false
                state.isCommunitySuccess = true
                state.community = action.payload
            })
            .addCase(community.rejected, (state, action) => {
                state.isCommunityLoading = false
                state.isCommunityError = true
                state.isCommunityMessage = action.payload
                state.community = null 
            })

            // joincommunity
            .addCase(joincommunity.pending, (state) => {
                state.isJoinCommunityLoading = true
            })
            .addCase(joincommunity.fulfilled, (state, action) => {
                state.isJoinCommunityLoading = false
                state.isJoinCommunitySuccess = true
                state.joincommunity = action.payload
            })
            .addCase(joincommunity.rejected, (state, action) => {
                state.isJoinCommunityLoading = false
                state.isJoinCommunityError = true
                state.isJoinCommunityMessage = action.payload
                state.joincommunity = null 
            })

            // leave community
            .addCase(leavecommunity.pending, (state) => {
                state.isLeaveCommunityLoading = true
            })
            .addCase(leavecommunity.fulfilled, (state, action) => {
                state.isLeaveCommunityLoading = false
                state.isLeaveCommunitySuccess = true
                state.leavecommunity = action.payload
            })
            .addCase(leavecommunity.rejected, (state, action) => {
                state.isLeaveCommunityLoading = false
                state.isLeaveCommunityError = true
                state.isLeaveCommunityMessage = action.payload
                state.leavecommunity = null 
            })

            // thread
            .addCase(thread.pending, (state) => {
                state.isThreadLoading = true
            })
            .addCase(thread.fulfilled, (state, action) => {
                state.isThreadLoading = false
                state.isThreadSuccess = true
                state.thread = action.payload
            })
            .addCase(thread.rejected, (state, action) => {
                state.isThreadLoading = false
                state.isThreadError = true
                state.isThreadMessage = action.payload
                state.thread = null 
            })

            // issue
            .addCase(issue.pending, (state) => {
                state.isIssueLoading = true
            })
            .addCase(issue.fulfilled, (state, action) => {
                state.isIssueLoading = false
                state.isIssueSuccess = true
                state.issue = action.payload
            })
            .addCase(issue.rejected, (state, action) => {
                state.isIssueLoading = false
                state.isIssueError = true
                state.isIssueMessage = action.payload
                state.issue = null 
            })

            // comment
            .addCase(comment.pending, (state) => {
                state.isCommentLoading = true
            })
            .addCase(comment.fulfilled, (state, action) => {
                state.isCommentLoading = false
                state.isCommentSuccess = true
                state.comment = action.payload
            })
            .addCase(comment.rejected, (state, action) => {
                state.isCommentLoading = false
                state.isCommentError = true
                state.isCommentMessage = action.payload
                state.comment = null 
            })

            // likecomment
            .addCase(likecomment.pending, (state) => {
                state.isLikeCommentLoading = true
            })
            .addCase(likecomment.fulfilled, (state, action) => {
                state.isLikeCommentLoading = false
                state.isLikeCommentSuccess = true
                state.likecomment = action.payload
            })
            .addCase(likecomment.rejected, (state, action) => {
                state.isLikeCommentLoading = false
                state.isLikeCommentError = true
                state.isLikeCommentMessage = action.payload
                state.likecomment = null 
            })

            // dislikecomment
            .addCase(dislikecomment.pending, (state) => {
                state.isDislikeCommentLoading = true
            })
            .addCase(dislikecomment.fulfilled, (state, action) => {
                state.isDislikeCommentLoading = false
                state.isDislikeCommentSuccess = true
                state.dislikecomment = action.payload
            })
            .addCase(dislikecomment.rejected, (state, action) => {
                state.isDislikeCommentLoading = false
                state.isDislikeCommentError = true
                state.isDislikeCommentMessage = action.payload
                state.dislikecomment = null 
            })
    }
})

export const { reset } = communitySlice.actions

export default communitySlice.reducer