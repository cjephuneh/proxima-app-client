const BASE_URI = 'http://localhost:8000/api'
const AUTH_ENDPOINT = BASE_URI + '/auth'
const TENANT_ENDPOINT = BASE_URI + '/tenantmanagement'
const CHAT_ENDPOINT = BASE_URI + '/chat'

export const ApiUrls = {
    // auth
    register_admin: AUTH_ENDPOINT + '/admin/',
    register_client: AUTH_ENDPOINT + '/client/',
    signin: AUTH_ENDPOINT + '/signin/',

    // tenant management
    tenant: TENANT_ENDPOINT + '/tenant/',
    tenant_product: TENANT_ENDPOINT + '/product/',
    tenant_address: TENANT_ENDPOINT + '/address/',
    tenant_metadata: TENANT_ENDPOINT + '/metadata/',

    // chat
    chat: CHAT_ENDPOINT + '/chat/',
    message: CHAT_ENDPOINT + '/message/',
}