import React from 'react';
import Menu from '../Menu';
import Header from '../Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import WordCloud from '../WordCloud';
import Candidate from '../Candidate';

const App = () =>(
    <Router>
        <React.Fragment>
            <Header/>
            <Route path="/map" component={Menu}/>
            <Route path="/wordcloud" component={WordCloud} />
            <Route path="/candidates" exact component={Candidate} />
            <Route path="/candidates/:personId" component={WordCloud} />
        </React.Fragment>
    </Router>
);

export default App;