import React, { Component } from 'react'

class Lista extends Component {
  render() {
    let list = [
      {
        name: "Jhonnys",
        email: "jhonnys.terra81@gmail.com"
      },
      {
        name: "Arthur",
        email: "terra.saha@gmail.com"
      }
    ]

    return (
      <div>
        <table>
          <tr>
            <td>Nome</td>
            <td>email</td>
          </tr>
          {list.map((item) => {
            return <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          })}
        </table>
      </div>
    );
  }
}

export default Lista;
