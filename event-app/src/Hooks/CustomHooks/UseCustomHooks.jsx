import React from 'react'
import UseFetchHook from './FetchCustomHook.jsx'

const UseCustomHooks = () => {
    const url = 'https://fakestoreapi.com/users/1'
    return (
        <div>
            <UseFetchHook url={url} />
        </div>
    )
}

export default UseCustomHooks
