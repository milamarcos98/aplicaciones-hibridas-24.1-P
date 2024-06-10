import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { AuthContext } from '../../context/AuthContext'
import {Link, useNavigate} from "react-router-dom"

 const Home = () => {

  // const [users, setUsers] = useState([])
  const [loading, setLoading] = useState([])
  // const {auth, logOutUser} = useContext(AuthContext)
  // let navigate = useNavigate()

  // useEffect(() => {
  //   setLoading(true)
  //   axios.get("http://localhost:3000/users", {headers: {'token': auth}})
  //   .then(res => {
  //     setUsers(res.data)
  //     setLoading(false)
  //   })
  //   .catch((error) => {
  //     setLoading(false)
  //     console.log(error)
  //     if(error?.response.data.error.message === "jwt expired"){
  //       alert("token expired")
  //       logOutUser()
  //       navigate("/login")
  //     }
  //   })
  // }, [])

  const [projects, setProjects ] = useState([])

    useEffect(() => {
    setLoading(true)
    axios.get("http://localhost:3000/projects")
    .then(res => {
      setProjects(res.data)
      setLoading(false)
    })
    .catch((error) => {
      setLoading(false)
      console.log(error)
    })
  }, [])

  return (
    <div>
      {/* {
        loading ?
        <p>loading...</p>
        : users?.map((user) => (
          <p>{user.name} - {user.email}</p>
        ))
      } */}
      <h1>Project List</h1>
      {
        loading ?
        <p>loading...</p>
        : projects?.map((project) => (
          <li key={project._id}>
            <Link to={`/projects/${project._id}`}>{project.name}</Link>
            {project.description}
          </li>
        ))
      }
    </div>
  )
}

export {Home}
