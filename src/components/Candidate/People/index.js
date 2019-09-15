import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { loadPeople , selectPerson} from '../../../services/candidate/actions';


class People extends Component {

    static propTypes = {
        loadPeople : PropTypes.func.isRequired,
        selectPerson : PropTypes.func,
        candidates : PropTypes.array.isRequired,
        person : PropTypes.object
    }

    state = {
        people : [],
        selectedPerson : ''
    }

    componentWillReceiveProps(nextProps){
         this.setState({
            people : nextProps.candidates,
            selectedPerson : nextProps.selectedPerson
        });
    }

    componentDidMount(){
        this.props.loadPeople();
    }

   
    selectedStyle = person => {
        let btn = "btn btn-block btn-";
        btn = person === this.state.selectedPerson ? `${btn}primary` : `${btn}danger`;
        return btn;
    }

    render() { 
        return ( 
            <div className="list-group">
                {
                    this.state.people.map((people) => 
                            <button 
                                    value = {people.person_id}
                                    className={this.selectedStyle(people.person_id)} key={people.person_id.toString()}
                                    onClick={() => this.props.selectPerson(people.person_id)}>
                                {people.name}
                            </button>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    candidates : state.people.people,
    selectedPerson : state.people.selectedPerson
});
    
export default connect(
    mapStateToProps, 
    {loadPeople,selectPerson}
)(People);
