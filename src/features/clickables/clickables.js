import React from 'react';
import { useSelector } from 'react-redux';
import { Clickable } from './clickable.js'
import './clickable.css';

// grab clickable info from the store
// render a clickable element for each object in the 
// store, passing in the props

export function Clickables() {

    const clickablesList = useSelector((state) => state.clickable);

    return (
        <div>
            {clickablesList.map((item, index) => (
                <div key={index}>
                    <Clickable left={item[0]} top={item[1]} />
                </div>
            ))}
        </div>
    )
}