import React, { useReducer } from 'react'

const initialState = {
    count : 0
}

function reducer(state, action){
    switch(action.type){
        case 'Increment' :
            return {count: state.count+1}
        case 'Decrement' :
            return {count: state.count-1}
        default:
            console.log('Error Occured')
    }
}



const UseReducerHook = () => {
    const [currState, dispatch] = useReducer(reducer, initialState)

    return (
    <div>
      <p>Value of count using useReducer : {currState.count}</p>
      <br /><br /><br />
      <button onClick={()=> dispatch({type:'Increment'})}>Increment</button>
      <button onClick={()=> dispatch({type:'Decrement'})}>Decrement</button>
    </div>
  )
}

export default UseReducerHook
