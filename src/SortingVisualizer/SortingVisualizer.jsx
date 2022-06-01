import React from "react";
import './SortingVisualizer.css';

//change this value for the speed of the animations 
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars in the array
const NUMBER_OF_ARRAY_BARS = 365;

//The color of array bars
const PRIMARY_COLOR = 'turquoise';

//color of array bars being compared through animations
const SECONDARY_COLOR = 'red';



export default class SortingVisualizer extends React.Component {
    //array stored in our state 
    //this is going to be our main array
    constructor(props){

        super(props);


        this.state = {
            array: [],
        };
    }
    //when this component loads for the first time we call the reset array function to reset our array
    componentDidMount(){
        this.resetArray();
    }

    resetArray() {
        const array = [];

        for(let i = 0; i < NUMBER_OF_ARRAY_BARS; i++){
            //pushes a random value between 5 and 100 into the array
            array.push(randomIntFromInterval(5,1000));
        }
        this.setState({array});
    }

    render () {

        return (
            <>
                {array.map((value, idx) => (
                    <div 
                    className = "array-bar" 
                    key = {idx}>
                    style = {{height: '${value}px'}}</div>
                ))}
            </>
        )
    }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    //inclusive of min and max
    return Math.floor(Math.random() * (max - min +1) + min);
}
