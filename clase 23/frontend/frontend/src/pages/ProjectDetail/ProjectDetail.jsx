import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export const ProjectDetail = () => {
    const {id} = useParams();
    const [project, setProject] = useState(null)
    const [task, setTask] = useState(null)
    const [loading, setLoading] = useState([])

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:3000/projects/${id}`)
        .then(res => {
            console.log(res.data)
          setProject(res.data)
          setLoading(false)
        })
        .catch((error) => {
          setLoading(false)
          console.log(error)
        })

        axios.get(`http://localhost:3000/tasks`)
        .then(res => {
            console.log(res.data)
          setLoading(false)
        })
        .catch((error) => {
          setLoading(false)
          console.log(error)
        })
      }, [])

      if(!project) return <p>Loading...</p>;

  return (
    <div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      
        <Link to={`/project/${id}/addTask`}>Add Task</Link>
    </div>
  )
}
