import React, { createContext, useContext } from 'react'
import {contextData} from './ParentComponent'


const ChildComponent = () => {
    const user = useContext(contextData);
    // console.log(user)
  return (
    <div>
      <p>value in child using useContext : {user}</p>
    </div>
  )
}

export default ChildComponent
