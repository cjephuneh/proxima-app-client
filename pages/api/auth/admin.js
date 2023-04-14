//  Register organization admin user

/* Route

/api/auth/admin

Response

{
    "username": "testadmin",
    "email": "testadmin@mail.com",
    "first_name": "test",
    "last_name": "admin",
    "phonenumber": "0790001947",
    "gender": "Male",
    "DOB": null,
    "user_type": "admin",
    "tenant_id": 1
}
*/



export default function handler(req, res) {
  const { username, first_name, last_name, phonenumber, gender, DOB, user_type, email, password } = req.body

  if(req.method === 'POST'){
      axios.post(`${BASE_URL}/api/auth/admin`, {
        username, first_name, last_name, phonenumber, gender, DOB, user_type, email, password
      }).then(({ data }) => {
          if(data.tenant_id){
              res.status(200).json(data)
          } else{
              res.status(400).json({
                  message: 'Registering the admin failed'
              })
          }
      })
  }
  }