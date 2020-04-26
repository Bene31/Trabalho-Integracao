import React, { Component } from 'react';
import './App.css';
import { Link, Route } from "react-router-dom"
import routesConfig from './routesConfig';

class App extends Component {

  render() {
    return (
      <div align="center">
        <div className="App">
        <Link to="/Home">Home&nbsp;&nbsp;</Link>
          <Link to="/">Formulario&nbsp;&nbsp;</Link>
          <Link to="/user">User</Link>
        </div>
        {routesConfig.map((value, key) => {
          return <Route key={key} path={value.path} component={value.component} exact={value.exact}></Route>
        })}
      </div>
    );
  }
}

export default App;
