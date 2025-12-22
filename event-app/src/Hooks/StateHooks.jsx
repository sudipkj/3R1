import React, { useState } from 'react'
import styles from '../Styles/StateAndEffectHooks.module.css'

const StateHooks = () => {

    // Initialize the useState hook with initial value
    const [name, setName] = useState('Initial value')
    const [object, setObject] = useState({
        name: 'Sudip',
        age: 27,
        gender: 'male'
    })

    const handleClick = () => {
        setObject({
            name:'Sudip Kumar Jana'
        })
    }
    return (
        <div>
            <section className='styles.section'>
                <div>
                    <h2>We are learning hooks</h2>
                </div>
                <div>
                    <h3>Below are list of hooks</h3>
                    <ol>
                        <li>useState</li>
                        <li>useEffect</li>
                        <li>useContext</li>
                        <li>useRef</li>
                        <li>useReducer</li>
                        <li>useMemo</li>
                        <li>useCallback</li>
                        <li>Custom Hooks</li>
                    </ol>
                </div>
                <div>
                    <h3>My name is : {name}</h3>
                    <h4>Employee value is  : {object.name}</h4>
                    <button onClick={handleClick}>Set Full Name</button>

                </div>
            </section>



        </div>
    )
}

export default StateHooks
