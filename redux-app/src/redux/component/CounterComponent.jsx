import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement} from '../slice/counterSlice.js'
import {selectCount} from  '../slice/counterSlice.js'

const CounterComponent = () => {
    // useSelector and useDispatch
    const counterValue = useSelector(selectCount)
    const dispatch = useDispatch();
  return (
    <div>
        <p>Value of counter : {counterValue}</p>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
      
    </div>
  )
}

export default CounterComponent
