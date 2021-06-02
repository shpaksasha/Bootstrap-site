import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Head from './components/Header/header';
import Home from './components/Home/home';
import Content from './components/Content/content';
import About from './components/About/about';

const App = () => {
    return (
        <Router>
            <Head/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/content' component={Content}/>
            <Route exact path='/about' component={About}/>
        </Router>
    )
};

export default App;
