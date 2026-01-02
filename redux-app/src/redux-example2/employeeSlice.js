import { createSlice } from "@reduxjs/toolkit";

export const exmployeeSlice = createSlice({
    name: 'employee',
    initialState: {
        name: 'Here is Employee Name',
        department : 'Department'
    },
    reducers : {
        getEmployee : (state)=> {
            state.name = 'Sudip Kumar Jana';
            state.department = 'IT';
    
        },
        newEmployee : (state, action) => {
            state.name = action.payload.name;
            state.department = action.payload.department;
        }

    }

})


export const {getEmployee, newEmployee} = exmployeeSlice.actions
export default exmployeeSlice.reducer;