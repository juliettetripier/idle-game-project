import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
    reducer: {
        // Each key-value pair in reducer defines a slice of
        // the Redux state.
        // The key is the name of the slice.
        // The value is the reducer function that manages
        // that slice.
        // This is telling the store to use the counterReducer
        // function to handle all updates to the counter state.
        counter: counterReducer,
    },
})