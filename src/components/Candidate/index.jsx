import React, { Component } from 'react';
import People from './People';
import Wordcloud from './WordCloud';

class Candidate extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row">
                <People />
                <Wordcloud/>
            </div>
        );
    }
}
 
export default Candidate;