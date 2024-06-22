import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Modal.scss';

const Modal = ({task, projectId, onClose, onTaskSaved, setCurrentTask}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [assignedUser, setAssignedUser] = useState('');
  const [status, setStatus] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [users, setUsers] = useState('');

  const fetchUsers = async () => {
    try{
      const res = await axios.get(`http://localhost:3000/users`)
      // console.log(res.data)
      setUsers(res.data)
    }catch(error){
      console.log("error:" + error)
    }
  }

  useEffect(() => {
    fetchUsers()
  },[])

  const clearFields = () => {
    setName("")
      setDescription("")
      setAssignedUser("")
      setStatus("")
      setStartDate('')
      setEndDate('')
      setCurrentTask(null)
  }


  useEffect(() => {
    if(task){
      setName(task.name)
      setDescription(task.description)
      setAssignedUser(task.assignedUser)
      setStatus(task.status)
      setStartDate(task.startDate ? task.startDate.substring(0,10): '')
      setEndDate(task.startDate ? task.startDate.substring(0,10): '')
    }
  },[task])

const handleSubmit = async (e) =>{
    e.preventDefault();
    // console.log(assignedUser)
    try{
      const assigned = users.find(user => user._id == assignedUser);
        const newTask = {
            name, 
            description,
            assignedUser: {
              userId: assigned._id,
              username: assigned.username
            },
            status,
            projectId,
            startDate,
            endDate
        }
        if(task){
          await axios.put(`http://localhost:3000/tasks/${task._id}`, newTask)
          clearFields()
        }else{
          await axios.post(`http://localhost:3000/tasks`, newTask)
          clearFields()
        }
        onTaskSaved()
        onClose()
    }catch(error){
        console.log(error)
    }
}


  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Description</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div>
            <label>Assigned User</label>
            {/* <input type="text" value={assignedUser} onChange={(e) => setAssignedUser(e.target.value)} required /> */}
            <select value={assignedUser} onChange={(e) => setAssignedUser(e.target.value)} required>
              <option value="">Select a user</option>
              {
                users && users.map(user => (
                  <option key={user._id} value={user._id}>
                    {user.name}
                  </option>
                ))
              }
            </select>
          </div>
          <div>
            <label>Status</label>
            <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} required />
          </div>
          <div>
            <label>Start Date</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div>
            <label>End Date</label>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
