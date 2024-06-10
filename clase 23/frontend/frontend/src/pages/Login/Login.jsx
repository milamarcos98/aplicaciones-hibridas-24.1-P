import React, { useContext, useState } from 'react'
import axios from "axios"
import { AuthContext } from '../../context/AuthContext'
import Cookies from "js-cookie"
import {useNavigate} from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState("")

  const {setUser} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()
    // console.log(userData)
    axios.post("http://localhost:3000/users/login", userData)
    .then((res) => {
      console.log(res)
      setUser(res.data.usuario)
      Cookies.set('jwToken', res.data.jwToken, {expires: 3})
      navigate('/')
    })
    .catch((error) => {
      setError(error.respose.data.message)
      console.log(error)
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" value={userData.email}
            onChange={(e) => setUserData({...userData, email: e.target.value})} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={userData.password}
            onChange={(e) => setUserData({...userData, password: e.target.value})} />
        </div>
        <button onClick={handleLogin}>Login</button>
        {
          error && <p>{error}</p>
        }
      </form>
    </div>
  )
}

export {Login}