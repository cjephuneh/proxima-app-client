import axios from "axios";

const generation = async(generationData) => {
    const res = await axios.post('/api/generation/generation', generationData)

    return res.data
}

const generationService = {
    generation
}

export default generationService
