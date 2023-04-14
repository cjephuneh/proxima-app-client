import axios from "axios";

const search = async (searchData) => {
    const res = await axios.post('/api/search', searchData)

    return res.data
}

const searchService = {
    search
}

export default searchService