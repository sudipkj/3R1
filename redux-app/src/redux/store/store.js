import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from '../slice/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterSliceReducer
    }
})
