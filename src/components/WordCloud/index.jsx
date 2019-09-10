import React, { Component } from 'react';
import * as d3 from 'd3';
import "./style.css";

class WordCloud extends Component {

    constructor(props){
        super(props);
        let str = "And you come to me on a summer breeze Keep you warm in your love then you softly leave";
        let res = str.split(" ");
        console.log(this.getWordObject(str));
        this.state = {
            words : res,
        }
    }

    getWordObject = str => {
        var words = str.split(" ");
        return words.map(
            function(w){
                return {text:w, size:10 + Math.random() * 60,x:Math.random(),y:Math.random()}
            }
        );
    }

    randomCoordinate(){
        return Math.floor()
    }

    draw =  () =>{
        d3.select("svg g")//.append("text")
        .selectAll("text")
        .data(this.state.words)
        .enter().append("text")
        .text(function(d){return d});
    }

    componentDidMount(){
        this.draw();
    }

    
    render() { 
        return (  
            <div className="row">
                <div className="col" >
                    <svg width="100%" height="800" >
                        <g transform="translate(250,250)">
                            {/* <circle cx="0" cy="0" fill="red" r="60"></circle> */}
                        </g>
                    </svg>
                </div>
            </div>
        );
    }
}
 
export default WordCloud;