import React, { useReducer } from 'react';

//initial state

const initialState = {

    count:0

}

//reducer func

const reducer = (state,action)=>{

    switch(action.type){

        case 'INCREMENT':

        return {count: state.count+1};

        case 'DECREMENT':

        return {count:state.count -1};

        case'RESET':

        return {count:0}

        default: return {count:state.count};

    }

}

function Reducer(props) {

    //useReducer

   const [state, dispatch] = useReducer(reducer, initialState);

    return (

        <div>

            <h1>It is the output of Reducer function</h1>

            <h2>Value of count:{state.count}</h2>

            <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>

            <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>

            <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>

        </div>

    );

}

export default Reducer;