import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchCustomHook = ({url}) => {

    const [data,setData] = useState('')

    useEffect(()=>{
        axios.get(url)
        .then(response => response.data)
        .then(data=> JSON.stringify(data))
        .then(f=> setData(f))
        .catch(error => console.log(error))
        
    },[data])

  return (
    <div>
      <p>Data from URL : {url}</p>
      <p>{data}</p>
    </div>
  )
}

export default FetchCustomHook
