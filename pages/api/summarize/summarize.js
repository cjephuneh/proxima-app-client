export default function handler(req, res){
    if(req.method === 'POST'){
        const { summarize_context } = req.body

        axios.post(`${BASE_URL}/api/generation/generation`, {
            summarize_context
          }).then(({ data }) => {
                  res.status(200).json(data)
                  
          })
    }
}