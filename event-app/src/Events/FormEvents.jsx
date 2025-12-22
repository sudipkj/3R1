import React from 'react'



const FormEvents = () => {

    const handleOnFocus = (e) => {
        e.target.style.backgroundColor = 'lightblue'
        console.log('Handle Focus is called on input')
    }
    const handleOnBlur = (e) => {
        e.target.style.backgroundColor = 'white'
        console.log('On blur event is called')
    }
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="">Email : </label>
                    <input name='email' onFocus={handleOnFocus} onBlur={handleOnBlur} type="email" />
                </div>
                <div>
                    <label htmlFor="">Password : </label>
                    <input name='password' onFocus={handleOnFocus} onBlur={handleOnBlur} type="password" />
                </div>
                <div>
                    <label htmlFor="">Phone Number : </label>
                    <input name='phone' onFocus={handleOnFocus} onBlur={handleOnBlur} type="tel" />
                </div>
                <div>
                    <button>Submit</button>
                    <button type='reset'>Reset</button>
                </div>
            </form>
        </div>
    )
}

export default FormEvents
