import React, { Component } from 'react';
import './App.css';
import Lista from './Lista';

class Formulario extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "Jhonnys",
      email: "jhonnys.terra81@gmail.com"
    }
    this.changeState = this.changeState.bind(this)
    this.resetState = this.resetState.bind(this)
    this.changeInput = this.changeInput.bind(this)
  }

  changeState() {
    this.setState({
      name: "Jhonnys Lakers"
    })
  }

  resetState() {
    this.setState({
      name: "Jhonnys",
      email: "jhonnys.terra81@gmail.com"
    })
  }

  changeInput(event) {
    let target = event.target
    let index = target.name
    this.setState({
      [index]: target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div><br></br>
          <form>

            <label>Nome:&nbsp;
              <input type="text" name="name" value={this.state.name} onChange={this.changeInput}></input>
            </label>

            <label>&nbsp; Email:&nbsp;
              <input type="email" name="email" value={this.state.email} onChange={this.changeInput}></input>
            </label>

          </form><br></br>

          {this.state.name} - {this.state.email}

        </div><br></br>

        <button onClick={this.changeState}>Mudar Nome</button>&nbsp;&nbsp;&nbsp;
        <button onClick={this.resetState}>Resetar Nome</button>
      </div>
    );
  }
}

export default Formulario;