// Register users who will seek assistance from organizations

/*
Request

/api/auth/client

Response

{
    "username": "testclient2",
    "email": "testclient2@mail.com",
    "first_name": "testclient",
    "last_name": "test",
    "phonenumber": "07936818408",
    "gender": "Male",
    "DOB": "1999-09-01",
    "user_type": "client"
}

*/

export default function handler(req, res) {
  const { username, first_name, last_name, phonenumber, gender, DOB, user_type, email, password } = req.body

  if(req.method === 'POST'){
      axios.post(`${BASE_URL}/api/auth/client`, {
        username, first_name, last_name, phonenumber, gender, DOB, user_type, email, password
      }).then(({ data }) => {
          if(data.user_type){
              res.status(200).json(data)
          } else{
              res.status(400).json({
                  message: 'Registering the user failed'
              })
          }
      })
  }
  }