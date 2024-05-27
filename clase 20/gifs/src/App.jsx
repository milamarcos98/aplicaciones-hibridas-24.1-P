import { Route, Routes } from 'react-router-dom'
import './App.css'
import {Home, Detail, Random, Navbar} from './components'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/random' element={<Random/>}/>
      <Route path='*' element={<h1>404 - Not found!</h1>}/>
    </Routes>
    </>
  )
}

export default App
