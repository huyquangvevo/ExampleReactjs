import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './style.css';
import Frame from '../Frame';

class Menu extends Component {
    state = {  
        shape_: 'circle',
    }

    changeShape = shapeName => {
        this.setState({
            shape_ : shapeName
        });
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="row">
                    <div className="col">
                        <div>
                            <button className="btn-menu" onClick={() => {this.changeShape('circle')}}>Circle</button>
                        </div>
                        <div>
                            <button className="btn-menu" onClick={() => {this.changeShape('rect')}}>Rectangle</button>
                        </div>
                    </div>
                </div>
                <Frame shape={this.state.shape_}/>
            </React.Fragment>
         );
    }
}
 
export default Menu;