export default function handler(req, res) {
    const { context } = req.query

    console.log(context)

    // make request to base url and attach the context as URL query
    if(req.method === 'POST'){
        axios.post(`${BASE_URL}/api/search?context=${context}`)
            .then(({ data }) => {
                res.status(200).json(data)
            })
    }
}