import React,{Component} from 'react';
import './style.css';
import {BrowserRouter as Route,Link} from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" >Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/map" className="nav-link" >Map</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/wordcloud" className="nav-link" >Word Cloud</Link>
                        </li>
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default Header;