import { useState, useRef, useEffect } from 'react'
import './App.css'
import Form from './Form'

function App() {
  // const [count, setCount] = useState(0)
  // const countRef = useRef(0)

  // const handleIncrement = () => {
  //   setCount(count + 1);
  //   countRef.current++;
  //   console.log("count:",count)
  //   console.log("ref:",countRef.current)
  // }

  // const inputRef = useRef(null)
  // console.log(inputRef)

  // useEffect(()=> {
  //   inputRef.current.focus()
  // },[])
  

  return (
    <>
    {/* <div>
      Count:{count}
      <button onClick={handleIncrement}>Increment</button>
    </div> */}
    {/* <input type="text" placeholder='...' ref={inputRef}/>
    <input type="text" placeholder='...'/> */}
    <Form/>
    </>
  )
}

export default App
