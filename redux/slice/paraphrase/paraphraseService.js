import axios from "axios";

const paraphrase = async(paraphraseData) => {
    const res = await axios.post('/api/paraphrase/paraphrase', paraphraseData)

    return res.data
}

const paraphraseService = {
    paraphrase
}

export default paraphraseService