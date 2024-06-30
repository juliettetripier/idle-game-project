import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from './clickableSlice';
import './clickable.css';

export function Clickable(props) {
    
    const dispatch = useDispatch();

    const clickableLeft = props.left + 'px';
    const clickableTop = props.top + 'px';

    const handleClick = () => {

        const payload = [props.left, props.top];

        dispatch(remove(payload));
    };

    return (
        <img className="clickable" style={{top: clickableTop, left: clickableLeft}} 
        src="../../public/clickCat.png" onClick={handleClick}></img>
    );
}
