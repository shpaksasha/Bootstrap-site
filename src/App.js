import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Head from './components/Header/header';
import Home from './components/Home/home';
import Content from './components/Content/content';
import Question from './components/FAQ/questions';
import About from './components/About/about';

const App = () => {
    return (
        <Router>
            <Head/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/content' component={Content}/>
            <Route exact path='/faq' component={Question}/>
            <Route exact path='/about' component={About}/>
        </Router>
    )
};

export default App;
