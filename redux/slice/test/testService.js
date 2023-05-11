import { makeRequest } from "@/utils/makeRequest";
import { API_ROUTES } from "@/utils/route";

const signin = async(userData) => {
    const res = await makeRequest('POST', API_ROUTES.LOGIN, {username, pwd})

    return res
}