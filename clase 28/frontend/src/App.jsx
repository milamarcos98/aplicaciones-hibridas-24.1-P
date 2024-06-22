import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Home, Register, Login, Dashboard} from "./pages"
import ProtectedRoutes from './utils/ProtectedRoutes'
import { TaskView } from './pages/TaskView/TaskView'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/taskview/:id' element={<TaskView/>} />
          <Route path='/dashboard/:id' element={<Dashboard/>} />
        </Route>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
       </Routes>
    </>
  )
}

export default App
