import React, { Component } from 'react'
import UserForm from './UserForm';

class User extends Component {
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
            <div><br></br>
            <UserForm></UserForm>  
            <br></br>
                <table border="1">
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                    {list.map((item) => {
                        return <tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.email}
                            </td>
                        </tr>
                    })}
                </table>
            </div>
        );
    }
}

export default User;
