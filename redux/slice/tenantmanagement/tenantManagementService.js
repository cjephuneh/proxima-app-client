import axios from "axios";

// create a tenant
const tenant = async (tenantData) => {
    const res = await axios.post('/api/tenantmanagement/tenant', tenantData)

    return res.data
}

// create and retrieve tenant products
const product = async (tenantData) => {
    const res = await axios.post('/api/tenantmanagement/product', tenantData)

    return res.data
}

// retrieve tennat address
const address = async (tenantData) => {
    const res = await axios.post('/api/tenantmanagement/adress', tenantData)

    return res.data
}

// retrieve tenant metadata
const metadata = async (tenantData) => {
    const res = await axios.post('/api/tenantmanagement/metadata', tenantData)

    return res.data
}

const tenantManagementService = {
    tenant,
    product,
    address,
    metadata
}

export default tenantManagementService;