import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Home, Register, Login} from "./pages"
import ProtectedRoutes from './utils/ProtectedRoutes'
import { ProjectDetail } from './pages/ProjectDetail/ProjectDetail'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/projects/:id' element={<ProjectDetail/>} />
        </Route>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
       </Routes>
    </>
  )
}

export default App
