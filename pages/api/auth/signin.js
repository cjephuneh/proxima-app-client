// Enable all users to signin

export default function handler(req, res) {
    const user = {
        name: 'kim'
    }
    if(req.method === 'POST'){
        /* 
            sign in logic
        */

        // send the API response
        if(req.body.name === user.name){
            res.status(200).json(req.body)
        } else {
            res.status(400).json({
                message: 'user does not exist'
            })
        }
    }
  }