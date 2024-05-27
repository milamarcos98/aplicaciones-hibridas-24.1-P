import { useState } from 'react'
import './App.css'
import Toast from './components/Toast'
import Item from './components/Item'

// const initialState = {counter: 0, value: "value"}

function App() {

  // let counter = 0;

  // HOOKS
  // const [counter, setCounter] = useState(initialState)


  // const increase = () => {
  //   setCounter(prevState => {
  //     return {...prevState, counter: prevState.counter + 1}
  //   })
  // }

  // const decrease = () => {
  //   setCounter(prevState => {
  //     return {...prevState, counter: prevState.counter - 1}
  //   })
  // }

  // const reset = () => {
  //   setCounter(initialState)
  // }

  return (
    <>
    <div>
      <h1>App</h1>
      {/* <h1>React counter</h1>
      <p>Counter: {counter.counter}</p>
      <p>Value: {counter.value}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    <button onClick={reset}>Reset</button> */}
    </div>
    <div>
      <Item/>
      <Toast/>
    </div>
    </>
  )
}

export default App
