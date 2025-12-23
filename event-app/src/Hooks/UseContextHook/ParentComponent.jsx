import React, { createContext, useState } from 'react'
import ChildComponent from './ChildComponent';

const contextData = createContext();
const ParentComponent = () => {


    const [user, setUser] = useState('Rohit Sharma')

    return (
        <contextData.Provider value={user}>

            <p>useContext example</p>
            <p>User name : {user} </p>
            {/* <p>User age : {user.age} </p> */}
            
            <ChildComponent/>
        </contextData.Provider>

    )
}

export {ParentComponent, contextData};
