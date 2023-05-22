const BASE_URI = 'http://localhost:8000/api'
const AUTH_ENDPOINT = BASE_URI + '/auth'
const TENANT_ENDPOINT = BASE_URI + '/tenantmanagement'
const CHAT_ENDPOINT = BASE_URI + '/chat'
const DESCRIPTIVE_ENDPOINT = BASE_URI + '/analytics'
const REPORTS_ENDPOINT = BASE_URI + '/reports'

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

    // descriptive
    countchats: DESCRIPTIVE_ENDPOINT + '/countchats/',
    cumulativehourlychats: DESCRIPTIVE_ENDPOINT + '/cumulativehourlychats/',
    counthourlychats: DESCRIPTIVE_ENDPOINT + '/counthourlychats/',
    countescalatedissues: DESCRIPTIVE_ENDPOINT + '/countescalatedissues/',
    hourlycountescalatedissues: DESCRIPTIVE_ENDPOINT + '/hourlycountescalatedissues/',
    communicationchannels: DESCRIPTIVE_ENDPOINT + '/communicationchannels/',
    engagementfrequency: DESCRIPTIVE_ENDPOINT + '/engagementfrequency/',
    hourlyaverageresponsetime: DESCRIPTIVE_ENDPOINT + '/hourlyaverageresponsetime/',
    averageresponsetime: DESCRIPTIVE_ENDPOINT + '/averageresponsetime/',
    hourlyclientsatisfaction: DESCRIPTIVE_ENDPOINT + 'hourlyclientsatisfaction/',
    leasttopics: DESCRIPTIVE_ENDPOINT + '/leasttopics/',
    clientsatisfaction: DESCRIPTIVE_ENDPOINT + '/clientsatisfaction/',
    populartopics: DESCRIPTIVE_ENDPOINT + '/populartopics/',
    clientsaverageage: DESCRIPTIVE_ENDPOINT + '/clientsaverageage/',
    clientcitydistribution: DESCRIPTIVE_ENDPOINT + '/clientcitydistribution/',
    countrydistribution: DESCRIPTIVE_ENDPOINT + '/countrydistribution/',
    genderdistribution: DESCRIPTIVE_ENDPOINT + '/genderdistribution/',
    statedistribution: DESCRIPTIVE_ENDPOINT + '/statedistribution/',
    averagecomments: DESCRIPTIVE_ENDPOINT + '/averagecomments/',
    communitygrowthrate: DESCRIPTIVE_ENDPOINT + '/communitygrowthrate/',
    communitymembers: DESCRIPTIVE_ENDPOINT + '/communitymembers/',
    communityrating: DESCRIPTIVE_ENDPOINT + '/communityrating/',
    cumulativecomments: DESCRIPTIVE_ENDPOINT + '/cumulativecomments/',
    cumulativeissues: DESCRIPTIVE_ENDPOINT + '/cumulativeissues/',
    uniquecomments: DESCRIPTIVE_ENDPOINT + '/uniquecomments/',
    cumulativevoicemessage: DESCRIPTIVE_ENDPOINT + '/cumulativevoicemessage/',
    averagevoicemessageperchat: DESCRIPTIVE_ENDPOINT + '/averagevoicemessageperchat/',
    issueuserrelation: DESCRIPTIVE_ENDPOINT + '/issueuserrelation/',
    commentsuserrelation: DESCRIPTIVE_ENDPOINT + '/commentsuserrelation/',
    surveyratings: DESCRIPTIVE_ENDPOINT + '/surveyratings/',
    surveyresponserate: DESCRIPTIVE_ENDPOINT + '/surveyresponserate/',
    averagesurveyrunperiod: DESCRIPTIVE_ENDPOINT + '/averagesurveyrunperiod/',
    totalsurveys: DESCRIPTIVE_ENDPOINT + '/totalsurveys/',

    // reports
    chatspdf: REPORTS_ENDPOINT + '/chatspdf/',
    chatscsv: REPORTS_ENDPOINT + '/chatscsv/',
    messagespdf: REPORTS_ENDPOINT + '/messagespdf/',
    messagescsv: REPORTS_ENDPOINT + '/messagescsv/',
    surveycsv: REPORTS_ENDPOINT + '/surveycsv/',
    surveypdf: REPORTS_ENDPOINT + '/surveypdf/',
    issuescsv: REPORTS_ENDPOINT + '/issuescsv/',
    issuespdf: REPORTS_ENDPOINT + '/issuespdf/',
    threadpdf: REPORTS_ENDPOINT + '/threadpdf/',
    threadscsv: REPORTS_ENDPOINT + '/threadscsv/',
    surveyresponsespdf: REPORTS_ENDPOINT + '/surveyresponsespdf/',
    surveyresponsescsv: REPORTS_ENDPOINT + '/surveyresponsescsv/',
}