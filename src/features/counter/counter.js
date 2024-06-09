import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
                <span>{count}</span>
            </div>
        </div>
    );
}