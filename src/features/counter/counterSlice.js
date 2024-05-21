import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const counterSlice = createSlice({
    // A name, used in action types.
    name: 'counter',
    // The initial state for this slice of state.
    initialState,
    // Reducers are functions that take a state and an action
    // (an action is basically an event that happens in the app) 
    // and return a new, updated state.
    reducers: {
        // Usually, Redux makes you update state immutably
        // by making copies of data and updating those copies.
        // createSlice() lets you write "mutating" update
        // logic that becomes correct immutable updates.
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
})

// Generate an action for each case in the reducer function
export const { increment, decrement, incrementByAmount }
    = counterSlice.actions;

// Export reducer function
// This reducer function handles updates to the Redux
// store for the 'counter' slice of the state.
export default counterSlice.reducer;