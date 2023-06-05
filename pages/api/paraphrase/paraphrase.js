export default function handler(req, res){
    if(req.method === 'POST'){
        const { paraphrase_context } = req.body

        axios.post(`${BASE_URL}/api/generation/generation`, {
            paraphrase_context
          }).then(({ data }) => {
                  res.status(200).json(data)
                  
          })
    }
}