import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './Componants/NavBar'
import Footer from './Componants/Footer'
import Home from './Componants/Pages/Home'
import Courses from './Componants/Pages/Courses'
import Contact from './Componants/Pages/Contact'



function App() {
        return (
            <Router>
                <div className="App">
                    <NavBar/>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/Courses' component={Courses}/>
                    <Route exact path='/Contact' component={Contact}/>
                    <Footer/>
                </div>
            </Router>
        );
}

export default App;