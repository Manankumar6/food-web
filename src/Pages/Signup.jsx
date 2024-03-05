import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    const [userData, setuserData] = useState({
        name: "",
        email: "",
        password: "",
        location: ""
    })
    const handleInput = (e) => {
        const { name, value } = e.target;
        setuserData({ ...userData, [name]: value })
    }

    const handleSubmit = async (e) => {
        const {name,email,password,location} = userData
        e.preventDefault();
        const response = await fetch('https://food-api-u34z.onrender.com/api/createuser', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({name,email,password,location})
        })
        if(response.ok){
                navigate("/login")
        }
        const data = await response.json()
        console.log(data)
       

    }
    return (
        <>
            <div className='container text-light'>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" value={userData.name} onChange={handleInput}  name='name' />
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" value={userData.email} onChange={handleInput} name='email' />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={userData.password} onChange={handleInput} name='password' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">location</label>
                        <input type="text" className="form-control" id="location" value={userData.location} onChange={handleInput} name='location' />
                    </div>

                    <button type="submit" className="m-3 btn btn-primary">Submit</button>
                    <Link to='/login' className="m-3 btn btn-danger">Already a user</Link>
                </form>
            </div>
        </>
    )
}

export default Signup
