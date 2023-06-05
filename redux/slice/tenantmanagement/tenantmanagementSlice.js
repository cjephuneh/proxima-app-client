import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tenantManagementService from "./tenantManagementService";

const initialState = {
    tenant: null,
    product: null,
    address: null, 
    metadata: null,

    // tenant
    isTenantError: false,
    isTenantSuccess: false,
    isTenantLoading: false,
    isTenantMessage: '',

    // product
    isProductError: false,
    isProductSuccess: false,
    isProductLoading: false,
    isProductMessage: '',

    // address
    isAddressError: false,
    isAddressSuccess: false,
    isAddressLoading: false,
    isAddressMessage: '',

    // metadata
    isMetadataError: false,
    isMetadataSuccess: false,
    isMetadataLoading: false,
    isMetadataMessage: ''
}

// create a tenant
export const tenant = createAsyncThunk('tenantmanagement/tenant', async (tenantData, thunkAPI) => {
    try {
        return await tenantManagementService.tenant(tenantData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// create and retrieve tenant products
export const product = createAsyncThunk('tenantmanagement/product', async (tenantData, thunkAPI) => {
    try {
        return await tenantManagementService.product(tenantData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// retrieve tenant address
export const address = createAsyncThunk('tenantmanagement/address', async (tenantData, thunkAPI) => {
    try {
        return await tenantManagementService.address(tenantData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// retrieve tenant metadata
export const metadata = createAsyncThunk('tenantmanagement/metadata', async (tenantData, thunkAPI) => {
    try {
        return await tenantManagementService.metadata(tenantData)
    } catch(error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const tenantManagementSlice = createSlice({
    name: 'tenantManagemnt',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // tenant
            .addCase(tenant.pending, (state) => {
                state.isTenantLoading = true
            })
            .addCase(tenant.fulfilled, (state, action) => {
                state.isTenantLoading = false
                state.isTenantSuccess = true
                state.tenant = action.payload
            })
            .addCase(tenant.rejected, (state, action) => {
                state.isTenantLoading = false
                state.isTenantError = true
                state.isTenantMessage = action.payload
                state.tenant = null 
            })

            // product
            .addCase(product.pending, (state) => {
                state.isProductLoading = true
            })
            .addCase(product.fulfilled, (state, action) => {
                state.isProductLoading = false
                state.isProductSuccess = true
                state.product = action.payload
            })
            .addCase(product.rejected, (state, action) => {
                state.isProductLoading = false
                state.isProductError = true
                state.isProductMessage = action.payload
                state.product = null 
            })

            // address
            .addCase(address.pending, (state) => {
                state.isAddressLoading = true
            })
            .addCase(address.fulfilled, (state, action) => {
                state.isAddressLoading = false
                state.isAddressSuccess = true
                state.address = action.payload
            })
            .addCase(address.rejected, (state, action) => {
                state.isAddressLoading = false
                state.isAddressError = true
                state.isAddressMessage = action.payload
                state.address = null 
            })

            // metadata
            .addCase(metadata.pending, (state) => {
                state.isMetadataLoading = true
            })
            .addCase(metadata.fulfilled, (state, action) => {
                state.isMetadataLoading = false
                state.isMetadataSuccess = true
                state.metadata = action.payload
            })
            .addCase(metadata.rejected, (state, action) => {
                state.isMetadataLoading = false
                state.isMetadataError = true
                state.isMetadataMessage = action.payload
                state.metadata = null 
            })
    }
})

export default tenantManagementSlice.reducer
