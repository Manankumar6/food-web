import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {

  const navigate = useNavigate();
  const [userData, setuserData] = useState({

    email: "",
    password: ""
  })
  const handleInput = (e) => {
    const { name, value } = e.target;
    setuserData({ ...userData, [name]: value })
  }

  const handleSubmit = async (e) => {
    const { email, password } = userData
    e.preventDefault();
    const response = await fetch('https://food-api-u34z.onrender.com/api/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })

    const data = await response.json()
    if(response.ok){
      localStorage.setItem("email",email)
      localStorage.setItem("authToken",data.authToken)
      navigate('/')
    }
    console.log(data)


  }
  return (
    <>
      <div className='container text-light'>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">

            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" value={userData.email} onChange={handleInput} name='email' />

          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" value={userData.password} onChange={handleInput} name='password' />
          </div>


          <button type="submit" className="m-3 btn btn-primary">Submit</button>
          <Link to='/signup' className="m-3 btn btn-danger">I'm a new user</Link>

        </form>
      </div>
    </>
  )
}

export default Login
