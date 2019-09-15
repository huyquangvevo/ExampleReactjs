import React, { Component } from 'react';
import "./style.css";
import ReactWordcloud from 'react-wordcloud';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchKeywords} from '../../../services/candidate/actions';

class WordCloud extends Component {

    static propTypes = {
        fetchKeywords : PropTypes.func.isRequired,
        selectedPerson : PropTypes.string,
    }

    state = {
        words : [{"text":"Please select to candidate","value":100}],
        selectedPerson : this.props.selectedPerson
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.selectedPerson !== this.state.selectedPerson){
            this.props.fetchKeywords(nextProps.selectedPerson);
            this.setState({
                selectedPerson : nextProps.selectedPerson,
                words : nextProps.keywords
            });
        }
    }

    toggleFontWordCloud = () => {
        this.setState({
            fontWordCloud : this.state.fontWordCloud === 'Impact' ? 'sans-serif' : 'Impact'
        });
    }
    
    render() { 
        return (  
            <div className="col-xl">
                <div className="col-3">
                    <button className="btn btn-warning" onClick={this.toggleFontWordCloud}>Update Option</button>
                </div>
                <div className="col" >
                    <ReactWordcloud words = {this.state.words} key={Math.random()}
                        options = {{ fontSizes: [25, 80], fontFamily:this.state.fontWordCloud }}
                        size = {[800,500]} /> 
               </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    keywords : state.people.keywords,
    selectedPerson : state.people.selectedPerson
});
 
export default connect(
    mapStateToProps,
    {fetchKeywords}
)(WordCloud);