import React from 'react';
import Menu from '../Menu';
import Header from '../Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import WordCloud from '../WordCloud';

const App = () =>(
    <Router>
        <React.Fragment>
            <Header/>
            <Route path="/map" component={Menu}/>
            <Route path="/wordcloud" component={WordCloud} />
        </React.Fragment>
    </Router>
);

export default App;