import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Dashboard.scss'

export const Dashboard = () => {
    const {id} = useParams();

    const [tasks, setTasks] = useState({todo: [], doing:[], blocked: [], done: []})

    useEffect(() => {
        const fetchTasks = async () => {
            try{
                const res = await axios.get(`http://localhost:3000/tasks/project/${id}`)
                const categorizedTasks = {todo: [], doing:[], blocked: [], done: []};

                res.data.forEach(task => {
                    if(task.status === 'to do') categorizedTasks.todo.push(task)
                    else if(task.status === 'doing') categorizedTasks.doing.push(task)
                    else if(task.status === 'blocked') categorizedTasks.blocked.push(task)
                    else if(task.status === 'done') categorizedTasks.done.push(task)
                })

                setTasks(categorizedTasks)
                console.log(categorizedTasks)
            }catch(error){
                console.error("error: ", error)
            }
        }

        fetchTasks()

    }, [])
    
    const onDragStart = (event, task, sourceColumn) => {
        event.dataTransfer.setData('task', JSON.stringify(task))
        event.dataTransfer.setData('sourceColumn', sourceColumn)
        // console.log(event)
    }

    const onDragOver = (event) => {
        event.preventDefault()
    }

    const onDrop = async (event, destinationColumn) => {
        // console.log(event)
        const task = JSON.parse(event.dataTransfer.getData('task'))
        const sourceColumn = event.dataTransfer.getData('sourceColumn')

        if(sourceColumn === destinationColumn) return;

        const sourceTasks = tasks[sourceColumn].filter(t => t._id !== task._id)
        const destinationTasks = [...tasks[destinationColumn], {...task, status: destinationColumn}]

        setTasks({
            ...tasks,
            [sourceColumn]: sourceTasks,
            [destinationColumn]: destinationTasks
        })

        try{
            await axios.patch(`http://localhost:3000/tasks/${task._id}/status`, {status: destinationColumn === 'todo' ? 'to do' : destinationColumn})

        }catch(error){
                console.error("error: ", error)
            }

    }

  return (
    <div className='board'>
        {['todo', 'doing', 'blocked', 'done'].map((column) => (
            <div
                key={column}
                className='column'
                onDragOver={onDragOver}
                onDrop={(event) => onDrop(event, column)}
            >
                <h2>{column.toUpperCase()}</h2>
                <div>
                    {
                        tasks[column].map(task => (
                            <div key={task._id} draggable onDragStart={(event) => onDragStart(event, task, column)}>
                                {task.name}
                            </div>
                        ))
                    }
                </div>
            </div>
        ))}
    </div>
  )
}
