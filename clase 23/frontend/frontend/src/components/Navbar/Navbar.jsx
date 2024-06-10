import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
  const {user, logOutUser} = useContext(AuthContext)

  return (
    <header>
      {user?.name ?  <h1>Hola {user.name} </h1> : <h1>logged out</h1>}
  
      <nav>
        <ul>
        {/* <li><NavLink to="/">HOME</NavLink></li> */}
          {
            user ? (
              <>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink onClick={() => logOutUser()} to="/login">LOGOUT</NavLink></li>
              </>
            ) :
            (
              <>
                <li><NavLink to="/login">LOGIN</NavLink></li>
                <li><NavLink to="/register">REGISTER</NavLink></li>
              </>
            )
          }
        </ul>
      </nav>
    </header>
  )
}

export default Navbar