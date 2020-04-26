import React, { Component } from 'react'

class Usario extends Component {
  render() {
    return (
      <div>
        <div>
          Nome: {this.props.name}
        </div>
        <div>
          Foto: <img src={this.props.image} width="100px" />
        </div>
      </div>
    );
  }
}

export default Usario;
