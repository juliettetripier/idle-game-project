import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './clickable.css';

// Clickables:
// - gets state info from the store
// - renders clickables based on that information

// Clickable:
// - has prop that contains location info
// - has onclick function that dispatches remove action
//   to store and sends message to server

// i still need to figure out how to both add and remove
// clickables based on time interval

// // set up way to get random number
// function getRandomNum(min, max) {
//     // round up min value to nearest int
//     min = Math.ceil(min);
//     // round down max value to nearest int
//     max = Math.floor(max);
//     // Math.random() generates a random float num between 
//     // 0 and 1 (not including 1)
//     // random num gets multiplied by the range of numbers we
//     // want to generate
//     // min is added to shift the range up
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// useEffect takes a function as its first argument
// this function is called after the component is rendered
// the second argument holds dependencies


// const clickableLeft = {props.left}
// clickableImg.style.left = clickableLeft + 'px';
// make onclick action

export function Clickable(props) {
    
    const clickableLeft = props.left + 'px';
    const clickableTop = props.top + 'px';

    return (
        <img class="clickable" style={{top: clickableTop, left: clickableLeft}} src="../../public/clickCat.png"></img>
    );
}
