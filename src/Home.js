import React, { Component } from 'react';
import './App.css';
import { Link, Route } from "react-router-dom"
import routesConfig from './routesConfig';
import logo from './logo.svg';
import Jhonnys from './Jhonnys';

class Home extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>
                        Trabalho React API
                    </h1>
                    <Jhonnys></Jhonnys>
                </header>
            </div>
        );
    }
}

export default Home;
