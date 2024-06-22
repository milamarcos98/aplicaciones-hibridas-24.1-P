import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { AuthContext } from '../../context/AuthContext'
import {Link, useNavigate} from "react-router-dom"

 const Home = () => {

  const [loading, setLoading] = useState([])
  const {user} = useContext(AuthContext)

  const [projects, setProjects ] = useState([])
  // create project
  const [name, setName ] = useState('')
  const [description, setDescription ] = useState('')
  // searchbox
  const [search, setSearch ] = useState('')

  const fetchProjects = async () => {
    try{
        const res = await axios.get("http://localhost:3000/projects")
        setProjects(res.data)
        console.log(res.data)
        setLoading(false)
      }catch(error){
        console.error(error)
        setLoading(false)
    }
  }
  
    useEffect(() => {
      setLoading(true)
      fetchProjects()
    // axios.get("http://localhost:3000/projects")
    // .then(res => {
    //   setProjects(res.data)
    //   setLoading(false)
    // })
    // .catch((error) => {
    //   setLoading(false)
    //   console.log(error)
    // })
  }, [])

  // -----------function search ----------------
  const handleSearch = async (e) => {
    e.preventDefault()
    try{
      const res = await axios.get("http://localhost:3000/projects/search", {
        params: {name: search}
      })
      setProjects(res.data)
      setSearch("")
      // console.log(res.data)
      setLoading(false)
    }catch(error){
      console.error(error)
      setLoading(false)
  }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user)
    const newProject = {
      name,
      description,
      owner: {
        userId: user.id,
        username: user.username
      }
    }
    try{
      const res = await axios.post("http://localhost:3000/projects", newProject)
      fetchProjects()
      setName("")
      setDescription("")
      setLoading(false)
    }catch(error){
      console.error(error)
      setLoading(false)
  }
  }



  return (
    <div>
      <h1>Project List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Project</button>
      </form>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {
        loading ?
        <p>loading...</p>
        : projects?.map((project) => (
          <li key={project._id}>
            <Link to={`/taskview/${project._id}`}>{project.name} - taskview</Link>
            <Link to={`/dashboard/${project._id}`}>{project.name} - dashboardd</Link>
          </li>
        ))
      }
    </div>
  )
}

export {Home}
