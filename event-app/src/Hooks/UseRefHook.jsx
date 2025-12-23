import React, { useRef } from 'react'

const UseRefHook = () => {

    const ref = useRef(0);
    console.log(ref.current)
    return (
        <div>
            <button onClick={() => {
                ref.current++;
                alert(`Clicked ${ref.current} times`);
            }}>Click Me</button>
        </div>
    )
}

export default UseRefHook
