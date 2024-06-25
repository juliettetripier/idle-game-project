import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from './clickableSlice';
import './clickable.css';

export function Clickable(props) {
    
    const dispatch = useDispatch();
    const clickableLeft = props.left + 'px';
    const clickableTop = props.top + 'px';

    const clickableState = useSelector(state => state.clickable);
    console.log(`state is ${clickableState}`);

    const handleClick = () => {
        // ideally the point value here should probably be a constant
        // established somewhere else in the code so the point
        // values for everything are in the same place?
        // but for now i'll just define it here
        const clickablePoints = 1;

        const index = clickableState.findIndex(clickable => 
            clickable[0] === props.left && clickable[1] === props.top);
        
        console.log(index);

        dispatch(remove(index));
    };

    return (
        <img className="clickable" style={{top: clickableTop, left: clickableLeft}} 
        src="../../public/clickCat.png" onClick={handleClick}></img>
    );
}
