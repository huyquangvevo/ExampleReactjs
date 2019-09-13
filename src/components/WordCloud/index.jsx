import React, { Component } from 'react';
import "./style.css";
import ReactWordcloud from 'react-wordcloud';


class WordCloud extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            words : [{"text":"Huy","value":12},{"text":"Hoang","value":30}],
            fontWordCloud : 'sans-serif',
            candidate : this.props.match.params.personId         
        };
        this.fetchWord(this.state.candidate);
    }

    fetchWord = personId => {
        var url = 'http://127.0.0.1:5000/candidates/';
        url = url + personId;
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then((result) =>{
                this.setState({
                    words : result
                });
            });
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
        return arrayWords;
    }

    toggleFontWordCloud = () => {
        this.setState({
            fontWordCloud : this.state.fontWordCloud === 'Impact' ? 'sans-serif' : 'Impact'
        });
    }
    
    render() { 
        return (  
            <div className="row">
                <div className="col-3">
                    <button className="btn btn-warning" onClick={this.toggleFontWordCloud}>Update Option</button>
                </div>
                <div className="col" >
                    <ReactWordcloud words = {this.state.words} key={Math.random()}
                        options = {{ fontSizes: [25, 80], fontFamily:this.state.fontWordCloud }}
                        size = {[1200,700]} /> 
               </div>
            </div>
        );
    }
}
 
export default WordCloud;