import React from 'react'
import casilla from "../assets/casilla-de-verificacion-vacia.png"
import check from "../assets/garrapata.png"

const Item = ({todo, handleDeleteTodo, handleToggleDone}) => {
  return (
    <li className='task' key={todo.id}>
      {todo.todo}
      <button onClick={() => handleToggleDone(todo.id)}>
        {
          todo.done ?
          <img src={check} alt="" /> :
          <img src={casilla} alt="" />
        }
      </button>
      <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
    </li>
  )
}

export default Item