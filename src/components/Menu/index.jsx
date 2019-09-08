import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './style.css';

class Menu extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div>
                    <button className="btn btn-warning btn-sm btn-block">Circle</button>
                </div>
                <div>
                    <button className="btn btn-danger btn-sm btn-block">Square</button>
                </div>
                <div>
                    <button className="btn btn-info btn-sm btn-block">Triagle</button>
                </div>
            </div>
         );
    }
}
 
export default Menu;