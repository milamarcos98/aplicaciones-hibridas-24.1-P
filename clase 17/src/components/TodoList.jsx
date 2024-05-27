import React, { useState } from 'react'
import styles from './TodoList.module.scss'
import Item from './Item';
import Toast from './Toast';

const TodoList = () => {
  const [inputTask, setInputTask] = useState('');
  const [list, setList] = useState([]);
  const [showToast, setShowToast] = useState({});

  const handleInputChange = (event) => {
    setInputTask(event.target.value);
    // console.log(inputTask)
  }

  const handleAddToDo = () => {
    const newTask = {
      id: list.length + 1,
      todo: inputTask,
      done: false
    }

    setList([...list, newTask])
    setInputTask("")
    // console.log(list)

    setShowToast({
      message: 'creado correctamente!',
      type: 'success',
      position: 'top-right'
    })

    setTimeout(() => {
      setShowToast({})
    }, 4000);
  }

  const handleDeleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id)
    setList(newList)

    setShowToast({
      message: 'eliminado correctamente!',
      type: 'danger',
      position: 'top-right'
    })

    setTimeout(() => {
      setShowToast({})
    }, 4000);
  }

  const handleToggleDone = (id) => {
    const updatedList = list.map((todo) => {
      return todo.id === id ?  {...todo, done: !todo.done} : todo
    })
    setList(updatedList)

    const updatedTask = updatedList.find(todo => todo.id === id)
    if(updatedTask && updatedTask.done){
      setShowToast({
        message: 'todo completado!',
        type: 'info',
        position: 'top-right'
      })
  
      setTimeout(() => {
        setShowToast({})
      }, 4000);
    }else{
      setShowToast({
        message: 'modificado correctamente!',
        type: 'warning',
        position: 'top-right'
      })
  
      setTimeout(() => {
        setShowToast({})
      }, 4000);
    }

    
  }


  return (
    <div className={styles.Todo}>
      {/* <Toast type="success" message="todo!" position='top-left'/>
      <Toast type="warning" message="todo!" position='top-right'/> */}
      {/* <Toast type="danger" message="todo!"/>
      <Toast type="info" message="todo!"/> */}

      {
        Object.keys(showToast).length > 0 && <Toast type={showToast.type} message={showToast.message} position={showToast.position}/>
      }

      <h1>ToDo List</h1>
      <div className={styles.input_container}>
        <input onChange={handleInputChange} type="text" placeholder='Enter a task' className={styles.input} value={inputTask}/>
        <button className={styles.btn} onClick={handleAddToDo}>Add</button>
      </div>
      <ul>
        {
          list.map((todo) => (
            <Item todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleDone={handleToggleDone} />
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList