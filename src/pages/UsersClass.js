import React, { Component } from 'react';
import api from '../api';

class UsersClass extends Component {
    state = {
        clientList: []
    }
    
    getClients = async () => {
        const result = await api.get('/clients');
        this.setState({clientList: result.data});
    }

    componentDidMount(){
        this.getClients();
    }

    render(){
        return(
            <div>
                <h2>Users</h2>
                {
                    this.state.clientList.map((client, i) => {
                        return <p key={i}>{client.name}</p>
                    })
                }
            </div>
        );
    }
}
export default UsersClass;