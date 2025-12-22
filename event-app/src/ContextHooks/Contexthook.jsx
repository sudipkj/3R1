import React, { useState } from 'react'

const Contexthook = () => {

    const [user, setUser] = useState('Rhoti Sharma')
  return (
    <div>
      
    </div>
  )
}

function ChildOne(){
    return(
        <>
            <h1>Value of User : {user}</h1>
        </>
    )
}

export default Contexthook
