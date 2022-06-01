import React from "react";
import './SortingVisualizer.css';

//change this value for the speed of the animations 
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars in the array
const NUMBER_OF_ARRAY_BARS = 365;

//The color of array bars
const PRIMARY_COLOR = 'turqoise';

//color of array bars being compared through animations
const SECONDARY_COLOR = 'red';



export default class SortingVisualizer extends React.component {

    constructor(props){
        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let i = 0; i < NUMBER_OF_ARRAY_BARS; i++){
    
        }
    }

}


