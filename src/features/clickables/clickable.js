import React, { useEffect } from 'react';
import './clickable.css';

// set up way to get random number
function getRandomNum(min, max) {
    // round up min value to nearest int
    min = Math.ceil(min);
    // round down max value to nearest int
    max = Math.floor(max);
    // Math.random() generates a random float num between 
    // 0 and 1 (not including 1)
    // random num gets multiplied by the range of numbers we
    // want to generate
    // min is added to shift the range up
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// useEffect takes a function as its first argument
// this function is called after the component is rendered
// the second argument holds dependencies

export function Clickable() {
    useEffect(() => {
        const clickableImg = document.querySelector('#clickable');
        const appHeader = document.querySelector('.App-header');

        // set image's left property to random number in the viewport
        const clickableLeft = getRandomNum(0, appHeader.offsetWidth);
        clickableImg.style.left = clickableLeft + 'px';

        // set image's top property to random number in the viewport
        const clickableTop = getRandomNum(0, appHeader.offsetHeight);
        clickableImg.style.top = clickableTop + 'px';
    }, []);
    return (
        <img id="clickable" src="../../public/clickCat.png"></img>
    );
}
