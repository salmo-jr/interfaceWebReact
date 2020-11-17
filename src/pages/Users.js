import React, {useEffect, useState} from 'react';
import api from '../api';

export default function Users(){
    const [clientList, setClientList] = useState([]);
    

    useEffect(() => {
        async function getClients(){
            const result = await api.get('/clients');
        
            setClientList(result.data);
        }
        getClients();
      }, []);

    return(
        <div>
            <h2>Users</h2>
            {
                clientList.map((client, i) => {
                    return <p key={i}>{client.name}</p>
                })
            }
        </div>
    );
}