import React, { useEffect, useState } from 'react'

const EffectsHook = () => {
    // Create a auto incrementor
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count + 1)
            clearTimeout(timer)
        }, 1000)

    })

    return (
        <div>
            <section>
                <h3>Value of count : {count}</h3>
            </section>

        </div>
    )
}

export default EffectsHook



