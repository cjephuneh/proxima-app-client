export default function handler(req, res) {
    const { context, filter } = req.body

    // make request to base url and attach the context and filter as URL queries
    if(req.method === 'POST'){
        axios.post(`${BASE_URL}/api/search?context=${context}&filter=${filter}`)
            .then(({ data }) => {
                res.status(200).json(data)
            })
    }
}