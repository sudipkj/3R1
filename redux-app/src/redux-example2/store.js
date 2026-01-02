import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from './employeeSlice.js'

export const empStore = configureStore({
    reducer: {
        employee: employeeReducer
    }
})
