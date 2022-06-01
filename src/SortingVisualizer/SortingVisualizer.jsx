import React from "react";
import './SortingVisualizer.css';

// Change this value for the number of bars in the array
NUMBER_OF_ARRAY_BARS = 365;



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


