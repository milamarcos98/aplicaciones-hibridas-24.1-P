import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
// import './TaskView.scss';
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"


const TaskView = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [dates, setDates] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);


  const fetchProjectDetails = async () => {
    try{
        const res = await axios.get(`http://localhost:3000/projects/${id}/details`,{
          params:{
            name: search,
            status: filterStatus,
            sortBy: sort, 
            page, 
            limit
          }
        })
        setProject(res.data.project)
        setTasks(res.data.tasks)
        const taskDates = res.data.tasks.map(task => {
          return {title: "start: " + task.name, start: task?.startDate.substring(0,10)}
        }).filter(date => date.start !== undefined)
        setDates(taskDates)
        console.log(res.data)
        setLoading(false)
      }catch(error){
        console.error(error)
        setLoading(false)
    }
  }

  const handleTaskSaved = () => {
    fetchProjectDetails()
  }

  const handlePageChange = (newPage) => {
    setPage(newPage)
  }

  const handleUpdateStatus = async (taskId, newStatus) => {
    try{
      await axios.patch(`http://localhost:3000/tasks/${taskId}/status`,  {
        status : newStatus
      })
      fetchProjectDetails()
    }catch(error){
      console.log("error:" + error)
    }
  }

  const handleDeleteTask = async (taskId) => {
    if(window.confirm('You sure?')){
      try{
        await axios.delete(`http://localhost:3000/tasks/${taskId}`)
        fetchProjectDetails()
      }catch(error){
        console.log("error:" + error)
      }
    }
  }

  const handleEditTask = (task) => {
    setCurrentTask(task)
    setShowModal(true)
  }

  useEffect(() => {
    fetchProjectDetails()
  }, [id, search, filterStatus, sort, page, limit])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='task_view'>
      <h1>{project.name} </h1>
      <p>{project.description} </p>
      <button onClick={() => setShowModal(true)}>Add task</button>
      {
        showModal && (
          <Modal
          task={currentTask}s
          projectId={id}
          onClose={() => {
            setShowModal(false)
            setCurrentTask(null)
          }}
          onTaskSaved={handleTaskSaved}
          setCurrentTask={setCurrentTask}
          />
        )
      }
      <div>
        <input
          type="text"
          placeholder="Search tasks"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">All Statuses</option>
          <option value="to do">To Do</option>
          <option value="doing">Doing</option>
          <option value="blocked">Blocked</option>
          <option value="done">Done</option>
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="status">Status</option>
        </select>
      </div>
      <h2>Tasks</h2>
      <ul className='task_list'>
        {
          tasks.map(task => (
            <li key={task._id}>
              <span>{task.name}: {task.description}</span>
              <span>Start date: {task.startDate ? task.startDate.substring(0, 10) : 'N/A'}</span>
              <span>End date: {task.endDate ? task.endDate.substring(0, 10) : 'N/A'}</span>
              <select value={task.status} onChange={(e) => handleUpdateStatus(task._id, e.target.value)}>
                <option value="to do">To Do</option>
                <option value="doing">Doing</option>
                <option value="blocked">Blocked</option>
                <option value="done">Done</option>
              </select>
              <button onClick={() => handleEditTask(task)}>Edit</button> 
              <button onClick={() => handleDeleteTask(task._id)}>Delete</button> 
            </li>
          ))
        }
      </ul>
      <div className='pagination'>
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => handlePageChange(page + 1)} disabled={tasks.length < limit}>
          Next
        </button>
      </div>
      <FullCalendar
      plugins={[dayGridPlugin]}
      initialView='dayGridMonth'
      weekends={true}
      events={dates}
      eventContent={renderEventContent}
      />
    </div>
  );
};

export { TaskView };

function renderEventContent(eventInfo){
  return(
    <>
    <b>{eventInfo.timeText}</b>
    <b>{eventInfo.event.title}</b>
    </>
  )
}
