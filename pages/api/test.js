export default function handler(req, res) {
    if(req.method === 'GET'){
        res.status(200).json({ base_url: process.env.BASE_URL })
    } 
}