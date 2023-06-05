export default function handler(req, res){
    if(req.method === 'POST'){
        const { full_context, no_of_questions } = req.body

        axios.post(`${BASE_URL}/api/generation/generation`, {
            full_context, no_of_questions
          }).then(({ data }) => {
                  res.status(200).json(data)
                  
          })
    }
}