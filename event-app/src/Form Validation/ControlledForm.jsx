import React, { useState } from 'react'

const ControlledForm = () => {

  const [formData, setFormData] = useState({
    email: '',
    phoneno: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e)=>{
      
      const {name,value} = e.target;
      setFormData({
        ...formData,
        [name]:value
      })
  }

  const handleSubmit= (e)=> {
    e.preventDefault();
    alert('Form is submitted successfully')
    console.log('Form is submitted successfully', formData)
  }

  return (
    <div>
      <h2>Welcome to Controlled Components/Forms</h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email : - </label>
          <input type="email" name='email' value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor=""> Phone :- </label>
          <input type="tel" name = 'phoneno' value={formData.phoneno} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">Password : -</label>
          <input type="password" name ='password' value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor=""> Confirm password : - </label>
          <input type="password" name = 'confirmPassword' value={formData.confirmPassword} onChange={handleChange} />
        </div>

        <div>
          <button type='reset'>Reset</button>
          <button type='submit'>Submit</button>
        </div>
      </form>

    </div>
  )
}

export default ControlledForm
