import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { AuthContext } from '../../context/AuthContext'

 const Home = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState([])
  const {auth} = useContext(AuthContext)

  useEffect(() => {
    setLoading(true)
    axios.get("http://localhost:3000/users", {headers: {'token': auth}})
    .then(res => {
      setUsers(res.data)
      setLoading(false)
    })
    .catch((error) => {
      setLoading(false)
    })
  }, [])

  return (
    <div>
      {
        loading ?
        <p>loading...</p>
        : users?.map((user) => (
          <p>{user.name} - {user.email}</p>
        ))
      }
    </div>
  )
}

export {Home}
