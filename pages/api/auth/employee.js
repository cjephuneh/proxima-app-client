// Register organization employee

/*
Request

/api/auth/employee

Response

{
    "username": "employee",
    "email": "employee@mail.com",
    "first_name": "employee",
    "last_name": "employee",
    "phonenumber": "079368184099",
    "gender": "Male",
    "DOB": null,
    "user_type": "employee",
    "tenant_id": 1
}

*/

export default function handler(req, res) {
  const { username, first_name, last_name, phonenumber, gender, DOB, user_type, email, password } = req.body

  if(req.method === 'POST'){
      axios.post(`${BASE_URL}/api/auth/employee`, {
        username, first_name, last_name, phonenumber, gender, DOB, user_type, email, password
      }).then(({ data }) => {
          if(data.tenant_id){
              res.status(200).json(data)
          } else{
              res.status(400).json({
                  message: 'Registering the user failed'
              })
          }
      })
  }
}