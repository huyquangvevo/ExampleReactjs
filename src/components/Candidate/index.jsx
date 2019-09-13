import React, { Component } from 'react';
import {BrowserRouter as Route,Link} from 'react-router-dom';

class Candidate extends Component {
    state = {
        candidates : []
    }

    componentDidMount(){

        fetch('http://127.0.0.1:5000/candidates')
            .then(res=>{
                return res.json();
            }).then(
                (result) => {
                    this.setState({
                        candidates : result
                    });
                console.log(result);

                }
            )
 
    }

    render() { 
        
        return ( 
            <ul className="list-group">
                {
                    this.state.candidates.map((candidate) => 
                        <li className="list-group-item" key={candidate.toString()}>
                            <Link to="candidates/edenhazard" className="nav-link" >{candidate}</Link>
                        </li>
                    )
                }
            </ul>
        );
    }
}
    
export default Candidate;
