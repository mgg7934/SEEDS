// JavaScript source code
// CODE WAS MADE THROUGH HELP OF SEVERAL STACKOVERFLOW THREADS AS WELL AS HELP FROM OTHER STUDENTS
// Code was not specifcally written on my own @Sanjeel Nath
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ShowAllArticles from './components/ShowAllArticles';


function App() {
    return (
        <div className="App">
        <Router>
            <div>
                <Route exact path='/' component={ShowAllArticles} />
            </div>
            </Router>
        </div>
  );
}

export default App;
