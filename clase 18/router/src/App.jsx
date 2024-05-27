import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import { Routes, Route, NavLink, Link, useParams, Outlet } from "react-router-dom"

const Home = () => {
  const data = ["pepe", "juan", "carlos"]
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {
          data.map((item) => (
            <li key={item}><Link to={`/detail/${item}`}>{item}</Link></li>
          ))
        }
      </ul>
    </div>
  )
}
const Other = () => {
  return(
    <div>
      <h1>Other</h1>
      {/* <Outlet/> */}
    </div>
  )
}
const Detail = () => {
  // console.log(useParams())
  const {name} = useParams()
  return(
    <div>
      <h2>{name}</h2>
    </div>
  )
}

const Content1 = () => {
  return(
    <div>
      <h2>Content1</h2>
    </div>
  )
}

const Content2 = () => {
  return(
    <div>
      <h2>Content2</h2>
    </div>
  )
}

const Content3 = () => {
  return(
    <div>
      <h2>Content3</h2>
    </div>
  )
}




function App() {


let url = "https://rickandmortyapi.com/api/character"

// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })

// fetch(url)
// .then((response) => response.json())
// .then((data) => console.log(data.results))
// .catch((error) => console.log(error))

// axios.get(url)
// .then((response) => console.log(response.data))
// .catch((error) => console.log(error))

  return (
    <>
    <header>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/other">Other</NavLink></li>
        </ul>
      </nav>
    </header>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/other' element={<Other/>} >
        <Route path='content1' element={<Content1/>} />
        <Route path='content2' element={<Content2/>} />
        <Route path='content3' element={<Content3/>} />
      </Route>
      <Route path='/search' element={<Other/>} />
      <Route path='/detail/:name' element={<Detail/>} />
      <Route path='*' element={<h1>Not found</h1>} />
    </Routes>
    </>
  )
}

export default App
