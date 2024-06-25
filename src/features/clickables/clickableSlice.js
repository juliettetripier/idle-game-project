import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const clickableSlice = createSlice({
    name: 'clickable',
    // state - simple way to represent current state of app
    // model aggregation of user input relative to initial
    // data type that stores clickables and where they spawn

    // look into optimistic updates
    initialState,
    reducers: {
        add: (state, action) => {
            return [...state, action.payload];
        },
        remove: (state, action) => {
            const index = action.payload;
            if (index === -1) {
                throw new Error(`${index} not found`);
            };
            state.splice(index, 1);
        } 
    },
})

export const { add, remove } = clickableSlice.actions

export default clickableSlice.reducer;