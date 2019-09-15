import React from 'react';
import Menu from '../Menu';
import Header from '../Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Candidate from '../Candidate';
import {Provider} from 'react-redux';
import store from '../../services/store';


const App = ({initialState={}}) =>(
    <Provider store={store(initialState)}>
        <Router>
            <React.Fragment>
                <Header/>
                <Route path="/map" component={Menu}/>
                {/* <Route path="/wordcloud" component={WordCloud} /> */}
                <Route path="/candidates" exact component={Candidate} />
                {/* <Route path="/candidates/:personId" component={WordCloud} /> */}
            </React.Fragment>
        </Router>
    </Provider>
);

export default App;