import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
// css

export function Counter() {
    // useSelector reads data from the store
    // in this case, it tells us the value of the 'counter' slice
    const count = useSelector((state) => state.counter.value)

    // useDispatch dispatches actions
    const dispatch = useDispatch()

    return (
        // In React, every component must return a single parent
        // element. <div> elements are sometimes used to wrap
        // groups of elements.
        <div>
            <div>
                <button
                    aria-label = 'Increment value'
                    onClick = {() => dispatch(increment())}
                >
                Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label = 'Decrement value'
                    onClick = {() => dispatch(decrement())}
                >
                Decrement
                </button>
            </div>
        </div>
    );
}