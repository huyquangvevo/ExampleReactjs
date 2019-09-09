import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './style.css';

class Menu extends Component {
    state = {  }

    render() { 
        return ( 
            <div id="menu-container" >
                <div>
                    <button className="btn-menu">Circle</button>
                </div>
                <div>
                    <button className="btn-menu">Square</button>
                </div>
                <div>
                    <button className="btn-menu">Triagle</button>
                </div>
            </div>
         );
    }
}
 
export default Menu;