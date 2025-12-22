import React, { useState } from 'react'

const ControlledForm = (props) => {

    const [formdata, setFormData] = useState({
        email:''
    })

    const handlechange = (e)=>{
        let newEmail = e.target.value
        setFormData({email:newEmail})
    }
  return (
    <div>
      <form >
        <div>
            <label>Email</label>
            <input type='email' value={formdata.email} onChange={handlechange}/>
            
        </div>

      </form>
    </div>
  )
}

export default ControlledForm
