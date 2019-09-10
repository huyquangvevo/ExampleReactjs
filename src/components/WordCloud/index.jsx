import React, { Component } from 'react';
import "./style.css";
import ReactWordcloud from 'react-wordcloud';


class WordCloud extends Component {

    constructor(props){
        super(props);
        let str = "I know your eyes in the morning sun I feel you touch my hand in the pouring rain And the moment that you wander far from me I wanna feel you in my arms again And you me on you warm in your you And me you your you you you And And And And And you you"
        // let str = "Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Huy Hoa"
        var words_ = this.getWords(str);
        this.state = {
            words : words_,
            fontWordCloud : 'sans-serif',           
        }
    }

    getWords = str => {
        var words = str.split(" ");
        var mapWords = new Map();
        for (let idx = 0; idx < words.length; idx++) {
          const element = words[idx];
          if(mapWords.has(element)){
              let freq = mapWords.get(element);
                mapWords.set(element,freq+1);
          } else {
              mapWords.set(element,1);
          }
        }
        var arrayWords = [];
        for (var [key,value] of mapWords){
            arrayWords.push({
                text : key,
                value : value
            });
        }
        console.log(arrayWords);
        return arrayWords;
    }

    toggleFontWordCloud = () => {
        this.setState({
            fontWordCloud : this.state.fontWordCloud === 'Impact' ? 'sans-serif' : 'Impact' 
        })
    }
    
    render() { 
        console.log("render words",this.state.words);
        return (  
            <div className="row">
                <div className="col-3">
                    <button className="btn btn-warning" onClick={this.toggleFontWordCloud}>Update Option</button>
                </div>
                <div className="col" >
                    <ReactWordcloud words = {this.state.words} 
                        options = {{ fontSizes: [25, 80], fontFamily:this.state.fontWordCloud }}
                        size = {[600,600]} />  
               </div>
            </div>
        );
    }
}
 
export default WordCloud;