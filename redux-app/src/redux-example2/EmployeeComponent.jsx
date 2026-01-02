import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {employeeName, employeeDepartment} from './employeeSlice.js'


const EmployeeComponent = () => {
    //useDepatcher and useSelector
    const selectorValue = useSelector((state) => state.name);
    const dispatch = useDispatch()
    return (

        <div>
            <p>Employee Name : { selectorValue}</p>
        </div>
    )
}

export default EmployeeComponent
